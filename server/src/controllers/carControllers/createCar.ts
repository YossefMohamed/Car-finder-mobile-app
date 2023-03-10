import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";
import { ICar } from "../../types/CarInterface";

export const createCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, price, categoryId } = req.body as ICar;

  const car: ICar = await prisma.car.create({
    data: { title, description, price, userId: req.user.id, categoryId },
  });
  res.status(200).json({
    status: "ok",
    data: car,
  });
};
