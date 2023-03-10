import { Router } from "express";
import { createCategory } from "../../controllers/categoryControllers/createCategory";
import { getCategories } from "../../controllers/categoryControllers/getCategories";

const mainRouter = Router();

mainRouter.post("/", createCategory);
mainRouter.get("/", getCategories);

export { mainRouter as categoryRouter };
