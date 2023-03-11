import { Router } from "express";
import { createCategory } from "../../controllers/categoryControllers/createCategory";

const router = Router();

router.post("/", createCategory);

export { router as createCategoryRouter };
