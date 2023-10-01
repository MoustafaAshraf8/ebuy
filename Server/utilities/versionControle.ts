import express, { Application } from "express";

let versionControle: express.Router = express.Router();

versionControle.use((req, res, next): void => {
  //direct request to active version
  let default_version: string = "v1";
  let version: string;
  process.env.ACTIVE_VERSION == undefined
    ? (version = default_version)
    : (version = process.env.ACTIVE_VERSION);
  req["url"] = "/" + version + req.url;
  console.log(`routed to: ${req.url}`);
  next();
});

export { versionControle };
