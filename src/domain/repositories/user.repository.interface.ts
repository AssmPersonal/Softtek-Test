import { User } from "../model/user.model";

export interface UserRepository {
  create(user: User): Promise<User>
  findAll(): Promise<User[]>
}