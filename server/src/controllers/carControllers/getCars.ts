import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";
import { ICar } from "../../types/CarInterface";

export const getCars = async (req: Request, res: Response) => {
  const cars: ICar[] = await prisma.car.findMany();
  res.status(200).json({
    status: "ok",
    data: cars,
  });
};
