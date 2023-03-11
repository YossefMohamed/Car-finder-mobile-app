import { Prisma } from "@prisma/client";
import { ICategory } from "./CategoryInterface";
import { IUser } from "./UserInterface";

export type ICar = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  price: number;
  description: string;
  userId: number;
  categoryId: number | null;
  Category?: ICategory[] | undefined;
  User?: IUser[] | undefined;
};
