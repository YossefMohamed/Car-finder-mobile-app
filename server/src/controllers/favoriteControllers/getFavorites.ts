import { NextFunction, Request, Response } from "express";
import logger from "../../services/logger";
import prisma from "../../services/prismaClient";
import { IFavorite } from "../../types/FavoriteInterface";

export const getFavorites = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const favorites: IFavorite[] = await prisma.favorite.findMany({
    where: {
      userId: req.user.id,
    },
    include: {
      Car: true,
    },
  });

  res.status(200).json({
    status: "ok",
    data: favorites,
  });
};
