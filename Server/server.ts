import express, { Application } from "express";
import { versionControle } from "./utilities/versionControle.js";
import { v1router } from "./API/v1/v1router.js";
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

// let corsOptions = {
//   allowedHeaders: [
//     "Origin",
//     "X-Requested-With",
//     "Content-Type",
//     "Accept",
//     "X-Access-Token",
//     "Authorization",
//     "Access-Control-Allow-Origin",
//     "Access-Control-Allow-Headers",
//     "Access-Control-Allow-Methods",
//   ],
//   methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
//   preflightContinue: true,
//   origin: "*",
// };

//essential middlewares
app.use(cors(corsOptions));
app.use(cookies());
app.use(bodyparser.json({ type: "application/json" }));
app.use(bodyparser.urlencoded({ extended: true }));

//direct for deployed version
app.use(versionControle);

//routing
app.use("/v1", v1router);

let port: number = Number(process.env.PORT) || 3000;
app.listen((port = port), (): void => {
  console.log(`listening on port: ${port}`);
});
