import { Router } from "express";
import editUser from "../../controllers/userControllers/editUser";

const router = Router();

router.patch("/", editUser);

export { router as editUserRouter };
