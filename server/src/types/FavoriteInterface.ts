import { ICar } from "./CarInterface";
import { IUser } from "./UserInterface";

export type IFavorite = {
  userId: number;
  carId: number;
  id: number;
  cars?: ICar[] | undefined;
  users?: IUser[] | undefined;
};
