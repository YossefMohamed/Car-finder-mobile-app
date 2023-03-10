import { Router } from "express";
import { protect } from "../middlewares/protect-routes";
import { editUserRouter } from "./userRoutes/editUser";
import { getUserRouter } from "./userRoutes/getUser";
import { loginUserRouter } from "./userRoutes/loginUser";
import { registerUserRouter } from "./userRoutes/registerUser";

const mainRouter = Router();

mainRouter.use("/users", getUserRouter);
mainRouter.use("/users", loginUserRouter);
mainRouter.use("/users", registerUserRouter);
mainRouter.use("/users", protect, editUserRouter);

export default mainRouter;
