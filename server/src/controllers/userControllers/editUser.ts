import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";
import { IUser } from "../../types/UserInterface";

const editUser = async (req: Request, res: Response, next: NextFunction) => {
  const {
    lastName,
    firstName,
    email,
  }: {
    lastName: string | undefined;
    firstName: string | undefined;
    email: string | undefined;
  } = req.body;

  const user: IUser = await prisma.user.update({
    where: {
      id: req.user.id,
    },
    data: {
      lastName: lastName || req.user.lastName,
      firstName: firstName || req.user.firstName,
      email: email || req.user.email,
    },
  });

  return res.status(200).json({
    status: "ok",
    data: { user },
  });
};

export default editUser;
