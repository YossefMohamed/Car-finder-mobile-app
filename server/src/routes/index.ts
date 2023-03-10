import { Router } from "express";
import { protect } from "../middlewares/protect-routes";
import { deleteUserRouter } from "./userRoutes/deleteUser";
import { editUserRouter } from "./userRoutes/editUser";
import { getCurrentUserRouter } from "./userRoutes/getCurrentUser";
import { getUserRouter } from "./userRoutes/getUser";
import { loginUserRouter } from "./userRoutes/loginUser";
import { refreshTokenRouter } from "./userRoutes/refreshToken";
import { registerUserRouter } from "./userRoutes/registerUser";

const mainRouter = Router();

mainRouter.use("/users", getUserRouter);
mainRouter.use("/users", loginUserRouter);
mainRouter.use("/users", registerUserRouter);
mainRouter.use("/users", protect, editUserRouter);
mainRouter.use("/users", protect, editUserRouter);
mainRouter.use("/users", protect, deleteUserRouter);
mainRouter.use("/users", protect, getCurrentUserRouter);
mainRouter.use("/users", refreshTokenRouter);

export default mainRouter;
