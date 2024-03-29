import { NextFunction, Request, Response } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      status: "failed",
      error: err.serializeErrors(),
    });
  }
  res.status(500).send({
    errors: [{ message: err.message || "Something went wrong" }],
  });
};
