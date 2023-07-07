import express, { Application } from "express";
import { versionControle } from "./utilities/versionControle.js";
import { v1router } from "./API/v1/v1router.js";
import bodyparser from "body-parser";
import * as dotenv from "dotenv";
dotenv.config();

let app: Application = express();

//essential middlewares
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
