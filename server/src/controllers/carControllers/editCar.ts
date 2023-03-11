import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import logger from "../../services/logger";
import prisma from "../../services/prismaClient";
import { ICar } from "../../types/CarInterface";

export const editCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const { title, description, price, categoryId } = req.body as ICar;
  const userId = req.user.id;
  const currentCar: ICar | null = await prisma.car.findUnique({
    where: {
      id,
    },
  });

  if (!currentCar || currentCar.userId !== userId)
    return next(new NotAuthorizedError());

  const car = await prisma.car.update({
    where: {
      id,
    },
    data: {
      title: title || currentCar.title,
      description: description || currentCar.description,
      price: price || currentCar.price,
      categoryId: categoryId || currentCar.categoryId,
    },
  });

  logger.error(car);
  res.status(200).json({
    status: "ok",
    data: car,
  });
};
