import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_Class } from "../../utilities/JWT_Class.js";
import { Error_message_Interface } from "../Interface/Error_message_Interface.js";

export function verifyReCookie_middleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.log("verifyToken function");
  const cookies = req.cookies;
  if (!cookies?.accessCookie) {
    let error: Error_message_Interface = {
      success: false,
      error: "no token available, please login",
    };
    res.statusCode = 401;
    res.json(error);
  }
  const accessToken = cookies.accessCookie;
  jwt.verify(
    accessToken,
    String(process.env.ACCESS_TOKEN_SECRET),
    (err: any, decoded: any) => {
      if (err) {
        let error: Error_message_Interface = {
          success: false,
          error: "invalid token",
        };
        res.statusCode = 403;
        res.json(error);
      } else {
        req.headers["user"] = decoded.id;
        console.log(`userid--> ${decoded.id}`);
        next();
      }
    }
  );
}
