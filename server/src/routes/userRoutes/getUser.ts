import { Router } from "express";
import getUser from "../../controllers/userControllers/getUser";

const router = Router();

router.get("/:id", getUser);

export { router as getUserRouter };
