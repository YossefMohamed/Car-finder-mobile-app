import { IFavorite } from "./FavoriteInterface";

export type IUser = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  email: string;
  profileImage?: any;
  password: string;
  favorites?: IFavorite[] | undefined;
  role: string;
};
