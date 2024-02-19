import { User } from "../../domain/model/user.model";
import { UserService } from "../services/user.service";

export class UserUseCase {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async createUser(user: User) {
    return await this.userService.createUser(user)
  }

  async findAllUsers() {
    return await this.userService.findAllUsers();
  }
}