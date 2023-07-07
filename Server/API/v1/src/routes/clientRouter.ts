import express from "express";

let clientRouter: express.Router = express.Router();

clientRouter
  .route("/")
  .get((req, res, next): void => {
    let x: string | undefined = process.env.ACTIVE_VERSION;
    console.log(process.env.ACTIVE_VERSION);
    res.json({ version: x, msg: "clientRouter. get /" });
  })
  .post((req, res, next): void => {
    res.json({ msg: "clientRouter. post /" });
  });

clientRouter
  .route("/:id")
  .get((req, res, next): void => {
    let id: number = Number(req.params.id);
    res.statusCode = 600;
    res.json({ id: id });
  })
  .post((req, res, next): void => {
    let id: number = Number(req.body.id);
    //let id: number = Number(req.params.id);
    console.log(req.body);
    res.statusCode = 600;
    res.json({ id: id });
  });

export { clientRouter };
