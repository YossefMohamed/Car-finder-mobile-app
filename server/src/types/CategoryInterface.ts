import { ICar } from "./CarInterface";

export type ICategory = {
  id: string;
  category: string;
  cars?: ICar[] | undefined;
};
