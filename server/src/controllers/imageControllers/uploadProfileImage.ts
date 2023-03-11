import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";

export const uploadImage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.file) return next(new Error("Kindly upload image"));
  const image = await prisma.image.create({
    data: {
      name: req.file.filename,
      userId: req.user.id,
    },
  });

  res.status(200).json({
    status: "ok",
    data: image,
  });
};
