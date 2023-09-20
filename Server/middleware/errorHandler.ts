import { Request, Response, NextFunction } from "express";

function errorHandler(
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  return res
    .status(500)
    .json({ name: error.name, msg: error.message, stack: error.stack });
}

export { errorHandler };
