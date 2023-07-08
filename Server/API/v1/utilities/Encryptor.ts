import bcrypt from "bcrypt";

export class Encryptor {
  public static hashPassword = async (password: string) => {
    let salt: string = await bcrypt.genSalt(5);
    let hashedPassword: string = await bcrypt.hash(password, salt);
    return hashedPassword;
  };

  public static verifyPassword = async (
    plaintext: string,
    hashedPassword: string
  ) => {
    return await bcrypt.compare(plaintext, hashedPassword);
  };
}
