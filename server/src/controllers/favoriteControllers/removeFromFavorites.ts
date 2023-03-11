import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";
import { IFavorite } from "../../types/FavoriteInterface";

export const removeFromFavorite = async (req: Request, res: Response) => {
  const { id } = req.params;
  const deletedFavorite: IFavorite = await prisma.favorite.delete({
    where: { id: Number(id) },
  });

  res.status(200).json({
    status: "ok",
    data: deletedFavorite,
  });
};
