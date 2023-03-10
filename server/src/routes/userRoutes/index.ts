import { Router } from "express";
import deleteUser from "../../controllers/userControllers/deleteUser";
import editUser from "../../controllers/userControllers/editUser";
import getCurrentUser from "../../controllers/userControllers/getCurrentUser";
import getUser from "../../controllers/userControllers/getUser";
import { login } from "../../controllers/userControllers/loginUser";
import { refreshToken } from "../../controllers/userControllers/refreshToken";
import { registerUser } from "../../controllers/userControllers/registerUser";
import { protect } from "../../middlewares/protect-routes";
import { validateRequest } from "../../middlewares/validate-request";
import { editUserValidators } from "../../validators/userValidators/user/editUserValidators";
import { signinValidators } from "../../validators/userValidators/user/signinValidators";
import { signupValidators } from "../../validators/userValidators/user/signupValidators";

const mainRouter = Router();

mainRouter.get("/:id", getUser);
mainRouter.post("/login", signinValidators, validateRequest, login);
mainRouter.post("/register", signupValidators, validateRequest, registerUser);
mainRouter.patch("/", protect, editUserValidators, validateRequest, editUser);

mainRouter.delete("/", protect, deleteUser);
mainRouter.get("/", protect, getCurrentUser);
mainRouter.get("/refresh", refreshToken);

export { mainRouter as userRouter };
