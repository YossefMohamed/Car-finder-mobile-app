import { Router } from "express";
import { carRouter } from "./carRoutes";
import { categoryRouter } from "./categoryRoutes";
import { favoriteRouter } from "./favoriteRoutes";

import { userRouter } from "./userRoutes";

const mainRouter = Router();

mainRouter.use("/users/", userRouter);
mainRouter.use("/cars/", carRouter);
mainRouter.use("/category/", categoryRouter);
mainRouter.use("/favorites/", favoriteRouter);

export default mainRouter;
