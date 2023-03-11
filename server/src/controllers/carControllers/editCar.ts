import { NextFunction, Request, Response } from "express";
import logger from "../../services/logger";
import prisma from "../../services/prismaClient";
import { ICar } from "../../types/CarInterface";

export const editCar = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, price, categoryId } = req.body as ICar;
  const userId = req.user.id;
  const car = await prisma.car.updateMany({
    where: {
      id: 1,
      userId,
    },
    data: {
      title,
      description,
      price,
      categoryId,
    },
  });

  logger.error(car);
  res.status(200).json({
    status: "ok",
    data: car,
  });
};
