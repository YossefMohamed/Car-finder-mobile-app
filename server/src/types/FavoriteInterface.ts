import { ICar } from "./CarInterface";
import { IUser } from "./UserInterface";

export type IFavorite = {
  userId: string;
  carId: string;
  id: string;
  cars?: ICar[] | undefined;
  users?: IUser[] | undefined;
};
