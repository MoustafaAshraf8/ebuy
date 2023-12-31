import { Request, Response, NextFunction } from "express";
import { Error_message_Interface } from "../src/Interface/Error_message_Interface.js";
import * as dotenv from "dotenv";
dotenv.config();
import jwt from "jsonwebtoken";
export class JWT_Class {
  public static createAccessToken(id: string | Object) {
    let accessToken = jwt.sign(
      { id },
      String(process.env.ACCESS_TOKEN_SECRET),
      { expiresIn: "10m" }
    );
    return accessToken;
  }
  public static createRefreshToken(id: string | Object) {
    let refreshToken = jwt.sign(
      { id },
      String(process.env.REFRESH_TOKEN_SECRET),
      { expiresIn: "1h" }
    );
    return refreshToken;
  }

  public static verifyAccessToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const authHeader: string | undefined = req.headers["authorization"];
    if (!authHeader) {
      let error: Error_message_Interface = {
        success: false,
        error: "forbiden access, no token",
      };
      res.statusCode = 401;
      res.json(error);
      return;
    }

    console.log(authHeader);
    const token = authHeader?.split(" ")[1];
    jwt.verify(
      token,
      String(process.env.ACCESS_TOKEN_SECRET),
      (err, decoded) => {
        if (err) {
          let error: Error_message_Interface = {
            success: false,
            error: "invalid token",
          };
          res.statusCode = 403;
          res.json(error);
        } else {
          Object(req).user = decoded?.indexOf;
          next();
        }
      }
    );
  }

  //   public static cookieParser(token: any) {

  //     const accessToken = cookies.accessCookie;
  //     console.log(cookies.accessCookie);
  //   }

  public static verifyRefreshToken(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const cookies = req.cookies;
    if (!cookies?.refreshCookie) res.statusCode = 401;
    const refreshToken = cookies.refreshCookie;
    console.log(cookies.refreshCookie);

    //search for client/seller in refreshCookie table

    //_________

    let foundClient = {
      name: "client-1",
      id: 1,
    };

    if (!foundClient) res.statusCode = 403;

    jwt.verify(
      refreshToken,
      String(process.env.REFRESH_TOKEN_SECRET),
      (err: any, decoded: any) => {
        if (err || foundClient.id != decoded.id) {
          res.statusCode = 403;
        }

        const accessToken = this.createAccessToken(String(foundClient.id));
        res.json({ accessToken });
      }
    );
  }
}
