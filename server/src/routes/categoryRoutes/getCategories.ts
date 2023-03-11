import { Router } from "express";
import { getCategories } from "../../controllers/categoryControllers/getCategories";

const router = Router();

router.get("/", getCategories);

export { router as getCategoriesRouter };
