import { Router } from "express";
import { addToFavorite } from "../../controllers/favoriteControllers/addToFavorite";
import { protect } from "../../middlewares/protect-routes";

const mainRouter = Router();

mainRouter.post("/:id", protect, addToFavorite);
export { mainRouter as favoriteRouter };
