import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";
import { ICar } from "../../types/CarInterface";

export const deleteCar = async (req: Request, res: Response) => {
  const { id } = req.params;
  const userId = req.user.id;
  const deletedCar = await prisma.car.deleteMany({
    where: { id: Number(id), userId },
  });
  res.status(200).json({
    status: "ok",
    data: deletedCar,
  });
};
