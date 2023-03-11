import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";
import { ICar } from "../../types/CarInterface";

export const getCar = async (req: Request, res: Response) => {
  const { id } = req.params;
  const car: ICar | null = await prisma.car.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.status(200).json({
    status: "ok",
    data: car,
  });
};
