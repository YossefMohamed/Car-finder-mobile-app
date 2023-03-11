import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import prisma from "../../services/prismaClient";
import { ICar } from "../../types/CarInterface";

export const deleteCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const userId = req.user.id;
  const currentCar: ICar | null = await prisma.car.findUnique({
    where: {
      id,
    },
  });
  if (!currentCar || currentCar.userId !== userId)
    return next(new NotAuthorizedError());
  const deletedCar = await prisma.car.delete({
    where: { id },
  });
  res.status(200).json({
    status: "ok",
    data: deletedCar,
  });
};
