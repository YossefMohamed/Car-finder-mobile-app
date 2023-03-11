import { Router } from "express";
import { uploadImage } from "../../controllers/imageControllers/uploadProfileImage";
import { upload } from "../../middlewares/image-upload";
import { protect } from "../../middlewares/protect-routes";

const mainRouter = Router();

mainRouter.post("/profile", protect, upload.single("image"), uploadImage);

export { mainRouter as imageRouter };
