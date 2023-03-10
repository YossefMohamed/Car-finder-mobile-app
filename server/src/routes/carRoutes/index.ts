import { Router } from "express";
import { createCar } from "../../controllers/carControllers/createCar";
import { protect } from "../../middlewares/protect-routes";

const mainRouter = Router();

mainRouter.post("", protect, createCar);

export { mainRouter as carRouter };
