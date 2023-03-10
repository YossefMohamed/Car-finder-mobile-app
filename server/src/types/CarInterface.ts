export type Car = {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  description: string;
  userId: number;
  categoryId: number | null;
};
