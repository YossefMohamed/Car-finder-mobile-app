import { Response, Request, NextFunction } from "express";
import { signIn } from "../../middlewares/protect-routes";
import { comparePassword } from "../../services/passwordHashing";
import prisma from "../../services/prismaClient";
import { User } from "../../types/UserInterface";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new Error("invalid email or password"));
  }
  const user: User | null = await prisma.user.findUnique({
    where: { email },
  });
  if (user && (await comparePassword(password, user.password))) {
    const token = signIn(user.id);

    console.log({
      data: {
        user,
        token,
      },
    });
    return res.status(201).json({
      status: "ok",
      data: {
        user,
        token,
      },
    });
  }

  next(new Error("invalid email or password"));
};
