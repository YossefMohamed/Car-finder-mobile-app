import { Router } from "express";
import { getUserRouter } from "./userRoutes/getUser";
import { loginUserRouter } from "./userRoutes/loginUser";
import { registerUserRouter } from "./userRoutes/registerUser";

const mainRouter = Router();

mainRouter.use("/users", getUserRouter);
mainRouter.use("/users", loginUserRouter);
mainRouter.use("/users", registerUserRouter);

export default mainRouter;
