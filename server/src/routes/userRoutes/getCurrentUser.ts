import { Router } from "express";
import getCurrentUser from "../../controllers/userControllers/getCurrentUser";

const router = Router();

router.get("/", getCurrentUser);

export { router as getCurrentUserRouter };
