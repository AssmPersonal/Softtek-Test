import { Router, Request, Response } from "express";
import { BaseController } from "./interfaces/base.controller.interface";
import { SwapiUseCase } from "../../../application/use_cases/swapi.usecase";

export class SwapiController implements BaseController {
  router: Router;
  path: string;

  private swapiUseCase: SwapiUseCase;

  constructor(path: string, swapiUseCase: SwapiUseCase) {
    this.router = Router();
    this.path = path;
    this.swapiUseCase = swapiUseCase;

    this.router.get("/", this.apiCall);
    this.router.get("/:resource", this.apiCall);
    this.router.get("/:resource/:id", this.apiCall);
  }

  apiCall = async (req: Request, res: Response) => {
    const resource = req.params.resource;
    const id = req.params.id;

    res.json(await this.swapiUseCase.apiCall(resource, id));
  }
}