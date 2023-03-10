import { Router } from "express";
import { createCar } from "../../controllers/carControllers/createCar";

const router = Router();

router.post("/", createCar);

export { router as createCarRouter };
