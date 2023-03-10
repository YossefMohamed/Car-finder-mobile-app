import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import prisma from "../services/prismaClient";
import { IUser } from "../types/UserInterface";

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}

export const signIn = (id: Number) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "randomSecret", {
    expiresIn: "20m",
  });
};

export const refreshTokenGenerator = (id: Number) => {
  return jwt.sign(
    { id },
    process.env.JWT_PRIVET_SECRET || "randomPrivetSecret",
    {
      expiresIn: "30d",
    }
  );
};

export const protect = async (req: any, res: Response, next: any) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      res.status(400);
      return next(new Error("PLease Login !"));
    }

    // 2- validate token
    const login: any = jwt.verify(
      token,
      process.env.JWT_SECRET || "randomSecret"
    );
    const freshUser = await prisma.user.findFirst({
      where: {
        id: login.id,
      },
    });

    if (!freshUser) {
      return next(new Error("Please Login Again !"));
    }

    req.user = freshUser;
    next();
  } catch (error) {
    next(new Error("Please Login Again !"));
  }
};

export const checkRefreshToken = async (req: Request) => {
  try {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
      return new Error("PLease Login !");
    }

    // 2- validate token
    const isValid: any = jwt.verify(
      token,
      process.env.JWT_PRIVET_SECRET || "randomSecret"
    );

    return isValid.id;
  } catch (error) {
    return new Error("Please Login Again !");
  }
};
