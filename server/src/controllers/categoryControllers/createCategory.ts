import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import prisma from "../../services/prismaClient";
import { ICategory } from "../../types/CategoryInterface";

export const createCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category } = req.body as ICategory;
  console.log("====================================");
  console.log(req.user);
  console.log("====================================");
  if (req.user.role !== "admin") return next(new NotAuthorizedError());
  const newCategory: ICategory = await prisma.category.create({
    data: {
      category,
    },
  });

  res.status(200).json({
    status: "ok",
    data: newCategory,
  });
};
