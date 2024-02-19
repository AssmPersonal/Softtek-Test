import { User } from "../../domain/model/user.model";
import { UserRepository } from "../../domain/repositories/user.repository.interface";

export class UserService {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async createUser(user: User) {
    return await this.userRepository.create(user);
  }

  async findAllUsers() {
    return await this.userRepository.findAll();
  }
}