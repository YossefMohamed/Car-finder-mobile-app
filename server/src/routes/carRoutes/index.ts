import { Router } from "express";
import { createCar } from "../../controllers/carControllers/createCar";
import { editCar } from "../../controllers/carControllers/editCar";
import { getCars } from "../../controllers/carControllers/getCars";
import { getCar } from "../../controllers/carControllers/getCar";
import { protect } from "../../middlewares/protect-routes";
import { deleteCar } from "../../controllers/carControllers/deleteCar";
import { upload } from "../../middlewares/image-upload";

const mainRouter = Router();

mainRouter.post("/", protect, upload.array("image", 6), createCar);
mainRouter.get("/", getCars);
mainRouter.patch("/:id", protect, editCar);
mainRouter.get("/:id", getCar);
mainRouter.delete("/:id", protect, deleteCar);

export { mainRouter as carRouter };
