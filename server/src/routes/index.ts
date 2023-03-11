import { Router } from "express";
import { carRouter } from "./carRoutes";
import { categoryRouter } from "./categoryRoutes";
import { favoriteRouter } from "./favoriteRoutes";
import { imageRouter } from "./imageRoutes";

import { userRouter } from "./userRoutes";

const mainRouter = Router();

mainRouter.use("/users/", userRouter);
mainRouter.use("/cars/", carRouter);
mainRouter.use("/category/", categoryRouter);
mainRouter.use("/favorites/", favoriteRouter);
mainRouter.use("/images/", imageRouter);

export default mainRouter;
