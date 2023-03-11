import { NextFunction, Request, Response } from "express";
import { NotAuthorizedError } from "../../errors/not-authorized-error";
import prisma from "../../services/prismaClient";
import { ICategory } from "../../types/CategoryInterface";

export const removeCategory = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { category } = req.params;
  if (req.user.role !== "admin") return next(new NotAuthorizedError());
  const deletedCategory: ICategory = await prisma.category.delete({
    where: {
      category,
    },
  });
  res.status(200).json({
    status: "ok",
    data: deletedCategory,
  });
};
