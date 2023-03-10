import { Router } from "express";
import { login } from "../../controllers/userControllers/loginUser";

const router = Router();

router.post("/login", login);

export { router as loginUserRouter };
