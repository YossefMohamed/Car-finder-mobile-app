import { NextFunction, Request, Response, Express } from "express";
import prisma from "../../services/prismaClient";
import { ICar } from "../../types/CarInterface";

export const createCar = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, description, price, categoryId } = req.body as ICar;
    if (!req.files) return next(new Error("Kindly upload car images"));
    const files = req.files as Express.Multer.File[];
    const car: ICar = await prisma.car.create({
      data: {
        title,
        description,
        price: Number(price),
        userId: req.user.id,
        categoryId,
      },
    });

    await Promise.all(
      files.map(async (file: any) => {
        await prisma.image.create({
          data: {
            name: file.filename,
            carId: car.id,
          },
        });
      })
    );

    const carWithImages: ICar | null = await prisma.car.findUnique({
      where: {
        id: car.id,
      },
      include: {
        images: true,
      },
    });

    res.status(200).json({
      status: "ok",
      data: carWithImages,
    });
  } catch (error: any) {
    next(new Error(error.message));
  }
};
