import { Router } from "express";
import { addToFavorite } from "../../controllers/favoriteControllers/addToFavorite";
import { getFavorites } from "../../controllers/favoriteControllers/getFavorites";
import { removeFromFavorite } from "../../controllers/favoriteControllers/removeFromFavorites";
import { protect } from "../../middlewares/protect-routes";

const mainRouter = Router();

mainRouter.post("/:id", protect, addToFavorite);
mainRouter.get("/", protect, getFavorites);
mainRouter.delete("/:id", protect, removeFromFavorite);

export { mainRouter as favoriteRouter };
