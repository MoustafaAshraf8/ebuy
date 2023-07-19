import jwt from "jsonwebtoken";
export class JWT_Class {
  public static create(parameter: string | Object) {
    let accessToken = jwt.sign(
      parameter,
      String(process.env.ACCESS_TOKEN_SECRET)
    );
    return { accessToken: accessToken };
  }
}
