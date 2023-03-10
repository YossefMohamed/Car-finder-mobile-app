import { Router } from "express";
import { registerUser } from "../../controllers/userControllers/registerUser";

const router = Router();

router.post("/register", registerUser);

export { router as registerUserRouter };
