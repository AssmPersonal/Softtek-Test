import express, { Application } from 'express';
import { BaseController } from "./controllers/interfaces/base.controller.interface";

export class Server {
  private _app: Application;

  constructor(controllers: BaseController[]) {
    this._app = express();

    this.defineMiddlewares();
    this.defineControllers(controllers);
  }

  get app() {
    return this._app;
  }

  private defineControllers(controllers: BaseController[]) {
    controllers.forEach(controller => {
      this._app.use(controller.path, controller.router);
    });
  }

  private defineMiddlewares() {
    this._app.use(express.json());
  }
}
