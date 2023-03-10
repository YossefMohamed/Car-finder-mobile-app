import { NextFunction, Request, Response } from "express";
import {
  refreshTokenGenerator,
  signIn,
} from "../../middlewares/protect-routes";
import { hashPassword } from "../../services/passwordHashing";
import prisma from "../../services/prismaClient";

export const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, firstName, password, lastName } = req.body;
  if (!firstName || !email || !password || !lastName) {
    res.status(401);
    return next(new Error("Please Fill All The Inputs "));
  }
  const checkMail = await prisma.user.findUnique({
    where: { email },
  });
  if (checkMail) {
    res.status(404);
    return next(new Error("There's Account with this Email !"));
  }
  const user: any = await prisma.user.create({
    data: {
      firstName,
      email,
      lastName,
      password: await hashPassword(password),
    },
  });
  const token = signIn(user._id);
  const refreshToken = refreshTokenGenerator(user._id);

  return res.status(201).json({
    status: "ok",
    data: {
      id: user.id,
      token,
      refreshToken,
    },
  });
};
