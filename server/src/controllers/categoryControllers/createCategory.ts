import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";
import { ICategory } from "../../types/CategoryInterface";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category } = req.body as ICategory;
  const newCategory = await prisma.category.create({
    data: {
      category,
    },
  });

  res.send(newCategory);
};
