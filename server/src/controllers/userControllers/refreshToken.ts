import { Request, Response } from "express";
import { checkRefreshToken, signIn } from "../../middlewares/protect-routes";

export const refreshToken = async (req: Request, res: Response) => {
  const userId = await checkRefreshToken(req);
  const token = signIn(userId);
  res.status(200).json({
    status: "ok",
    data: token,
  });
};
