import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { JWT_Class } from "../../utilities/JWT_Class.js";
import { Error_message_Interface } from "../Interface/Error_message_Interface.js";

function verifyAccessToken(req: Request, res: Response, next: NextFunction) {
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
  jwt.verify(token, String(process.env.ACCESS_TOKEN_SECRET), (err, decoded) => {
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
  });
}
