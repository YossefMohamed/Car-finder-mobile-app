import { Router } from "express";
import { createCategory } from "../../controllers/categoryControllers/createCategory";
import { getCategories } from "../../controllers/categoryControllers/getCategories";
import { removeCategory } from "../../controllers/categoryControllers/removeCategory";

const mainRouter = Router();

mainRouter.post("/", createCategory);
mainRouter.get("/", getCategories);
mainRouter.delete("/:category", removeCategory);

export { mainRouter as categoryRouter };
