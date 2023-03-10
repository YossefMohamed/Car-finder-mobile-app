import { Router } from "express";
import { refreshToken } from "../../controllers/userControllers/refreshToken";

const router = Router();

router.post("/refresh", refreshToken);

export { router as refreshTokenRouter };
