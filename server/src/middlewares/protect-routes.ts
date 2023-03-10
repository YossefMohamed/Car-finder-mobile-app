import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import prisma from "../services/prismaClient";
import { User } from "../types/UserInterface";

declare global {
  namespace Express {
    interface Request {
      user: User;
    }
  }
}

export const signIn = (id: Number) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || "randomSecret", {
    expiresIn: "30d",
  });
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
    next(error);
  }
};
