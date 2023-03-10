export type ICar = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  price: number;
  description: string;
  userId: number;
  categoryId: number | null;
};
