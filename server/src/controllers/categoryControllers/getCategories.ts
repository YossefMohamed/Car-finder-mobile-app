import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";
import { ICategory } from "../../types/CategoryInterface";

export const getCategories = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const categories: ICategory[] = await prisma.category.findMany({
    include: {
      cars: true,
    },
  });

  res.send(categories);
};
