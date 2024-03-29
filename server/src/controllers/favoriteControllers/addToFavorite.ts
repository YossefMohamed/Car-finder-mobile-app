import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";
import { IFavorite } from "../../types/FavoriteInterface";

export const addToFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  const newFavorite: IFavorite = await prisma.favorite.create({
    data: {
      userId: req.user.id,
      carId: id,
    },
  });
  res.status(200).json({
    status: "ok",
    data: newFavorite,
  });
};
