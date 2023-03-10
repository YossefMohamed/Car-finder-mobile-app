import { NextFunction, Request, Response } from "express";

const getCurrentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  return res.status(200).json({
    status: "ok",
    data: { user: req.user },
  });
};

export default getCurrentUser;
