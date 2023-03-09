import { Router } from "express";
import { getUserRouter } from "./userRoutes/getUser";

const mainRouter = Router();

mainRouter.use("/users", getUserRouter);

export default mainRouter;
