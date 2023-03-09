import bcrypt from "bcrypt";

export const hashPassword: (password: string) => Promise<string> = async (
  password: string
) => {
  const hashedPassword = await bcrypt.hash(password, 8);
  return hashedPassword;
};

export const comparePassword: (
  password: string,
  hashedPassword: string
) => Promise<boolean> = async (password: string, hashedPassword: string) => {
  const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
  return isPasswordCorrect;
};
