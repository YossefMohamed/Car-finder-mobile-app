import { body } from "express-validator";
import prisma from "../../../services/prismaClient";

export const signupValidators = [
  body("email")
    .isEmail()
    .custom(async (value, { req }) => {
      const isDuplicated = await prisma.user.findUnique({
        where: { email: value },
      });
      if (isDuplicated) throw new Error(`${value} is duplicated!`);
      return true;
    }),
  body("lastName").not().isEmpty().withMessage("Lastname Cant Be Empty"),
  body("firstName").not().isEmpty().withMessage("name Cant Be Empty"),
  body("password").exists().withMessage("Password Must Be Between 8 and 20"),
];
