import { User } from "../../../domain/model/user.model";
import { UserRepository } from "../../../domain/repositories/user.repository.interface";
import { PrismaClient } from "../generated";

export class MySQLUserRepository implements UserRepository {
  private client: PrismaClient
  
  constructor(client: PrismaClient) {
    this.client = client;
  }

  async create(user: User): Promise<User> {
    const userEntity = await this.client.user.create({
      data: user
    });

    return userEntity;
  }
  
  async findAll(): Promise<User[]> {
    const users = await this.client.user.findMany()
    return users;
  }
}