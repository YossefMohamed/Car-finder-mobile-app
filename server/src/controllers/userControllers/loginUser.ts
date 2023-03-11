import { Response, Request, NextFunction } from "express";
import {
  refreshTokenGenerator,
  signIn,
} from "../../middlewares/protect-routes";
import logger from "../../services/logger";
import { comparePassword } from "../../services/passwordHashing";
import prisma from "../../services/prismaClient";
import { IUser } from "../../types/UserInterface";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new Error("invalid email or password"));
  }
  const user: IUser | null = await prisma.user.findUnique({
    where: { email },
  });
  if (user && (await comparePassword(password, user.password))) {
    const token = signIn(user.id);
    const refreshToken = refreshTokenGenerator(user.id);
    logger.warn({
      data: {
        id: user.id,
        token,
        refreshToken,
      },
    });
    return res.status(201).json({
      status: "ok",
      data: {
        id: user.id,
        token,
        refreshToken,
      },
    });
  }

  next(new Error("invalid email or password"));
};
