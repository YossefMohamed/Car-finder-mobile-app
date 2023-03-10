import { NextFunction, Request, Response } from "express";
import logger from "../../services/logger";
import prisma from "../../services/prismaClient";
import { IFavorite } from "../../types/FavoriteInterface";

export const addToFavorite = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  logger.warn("Awd");
  const newFavorite: IFavorite = await prisma.favorite.create({
    data: {
      userId: req.user.id,
      carId: Number(id),
    },
  });

  res.send(newFavorite);
};
