import { Router } from "express";
import { createCategory } from "../../controllers/categoryControllers/createCategory";
import { getCategories } from "../../controllers/categoryControllers/getCategories";
import { removeCategory } from "../../controllers/categoryControllers/removeCategory";
import { protect } from "../../middlewares/protect-routes";

const mainRouter = Router();

mainRouter.post("/", protect, createCategory);
mainRouter.get("/", getCategories);
mainRouter.delete("/:category", protect, removeCategory);

export { mainRouter as categoryRouter };
