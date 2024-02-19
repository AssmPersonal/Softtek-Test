import { Router } from "express";

export interface BaseController {
  router: Router;
  path: string;
}
