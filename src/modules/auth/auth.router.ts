import { Router } from "express";
import { injectable } from "tsyringe";
import { validateBody } from "../../middlewares/validation.middleware";
import { RegisterDTO } from "./dto/register.dto";
import { AuthController } from "./auth.controller";

@injectable()
export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor(authController: AuthController) {
    this.router = Router();
    this.authController = authController;
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post("/register", validateBody(RegisterDTO), this.authController.register);
  }

  getRouter() {
    return this.router;
  }
}
