import express, { Application, Request, Response, NextFunction } from "express";
import { versionControle } from "./utilities/versionControle.js";
import { v1router } from "./v1/v1router.js";
import { errorHandler } from "./middleware/errorHandler.js";
import bodyparser from "body-parser";
import cors from "cors";
import cookies from "cookie-parser";
import * as dotenv from "dotenv";
dotenv.config();

let app: Application = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

//essential middlewares
app.use(cors(corsOptions));
app.use(cookies());
app.use(bodyparser.json({ type: "application/json" }));
app.use(bodyparser.urlencoded({ extended: true }));

//direct for deployed version
app.use(versionControle);

//routing
app.use("/v1", v1router);
// app.use("/image", (req: Request, res: Response, next: NextFunction) => {
//   //res.json({ msg: "test" });
//   res.sendFile("D:/00-GitHub/Ebuy/Server/db_design.jpg");
// });

//error handler
app.use(errorHandler);

let port: number = Number(process.env.PORT) || 3000;
app.listen((port = port), (): void => {
  console.log(`listening on port: ${port}`);
});
