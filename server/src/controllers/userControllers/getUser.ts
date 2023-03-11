import { NextFunction, Request, Response } from "express";
import prisma from "../../services/prismaClient";

const getUser = async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;

  const user = await prisma.user.findFirst({
    where: {
      id,
    },
    include: {
      profileImage: true,
    },
  });
  return res.status(200).json({
    status: "ok",
    data: user,
  });
};

export default getUser;
