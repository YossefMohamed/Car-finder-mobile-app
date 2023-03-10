import { ICar } from "./CarInterface";

export type ICategory = {
  id: number;
  category: string;
  cars?: ICar[] | undefined;
};
