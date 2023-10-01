import bcrypt from "bcrypt";

export class Encryptor {
  public static hashPassword = async (password: string) => {
    let salt_round: number = Number(process.env.SALT_ROUND);
    let salt: string = await bcrypt.genSalt(salt_round);
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
