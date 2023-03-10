import bcrypt from "bcrypt";

export const hashPassword: (password: string) => Promise<string> = async (
  password: string
) => {
  return await bcrypt.hash(password, 8);
};

export const comparePassword: (
  password: string,
  hashedPassword: string
) => Promise<boolean> = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};
