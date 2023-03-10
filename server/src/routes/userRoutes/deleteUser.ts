import { Router } from "express";
import deleteUser from "../../controllers/userControllers/deleteUser";

const router = Router();

router.delete("/", deleteUser);

export { router as deleteUserRouter };
