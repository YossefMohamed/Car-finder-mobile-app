export type IUser = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  firstName: string;
  lastName: string;
  email: string;
  profileImage: string | null;
  password: string;
};
