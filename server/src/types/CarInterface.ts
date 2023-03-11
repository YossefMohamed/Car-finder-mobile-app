import { Prisma } from "@prisma/client";
import { ICategory } from "./CategoryInterface";
import { IUser } from "./UserInterface";

export type ICar = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  price: number;
  description: string;
  userId: string;
  categoryId: string;
  Category?: ICategory[] | undefined;
  User?: IUser[] | undefined;
};
