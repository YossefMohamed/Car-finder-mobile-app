import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";
import { IUser } from "../../types/UserInterface";

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  const deletedUser: IUser = await prisma.user.delete({
    where: {
      id: req.user.id,
    },
  });
  res.status(200).json({ status: "ok", data: deletedUser });
};

export default deleteUser;
