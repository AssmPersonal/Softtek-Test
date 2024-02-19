import { Router, Request, Response } from "express";
import { BaseController } from "./interfaces/base.controller.interface";
import { UserUseCase } from "../../../application/use_cases/user.usecase";
import { User } from "../../../domain/model/user.model";

export class UserController implements BaseController {
  router: Router;
  path: string;

  private userUseCase: UserUseCase;

  constructor(path: string, userUseCase: UserUseCase) {
    this.router = Router();
    this.path = path;
    this.userUseCase = userUseCase;
    
    this.router.get("", this.findAllUsers);
    this.router.post("", this.createUser);
  }

  createUser = async (req: Request, res: Response) => {
    const user: User = req.body;

    res.json(await this.userUseCase.createUser(user));
  }

  findAllUsers = async (req: Request, res: Response) => {
    res.json(await this.userUseCase.findAllUsers());
  }
}
