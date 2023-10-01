import * as dotenv from "dotenv";
dotenv.config();
import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
  host: process.env.POSTGRESS_HOST,
  user: process.env.POSTGRESS_USER,
  port: Number(process.env.POSTGRESS_PORT),
  password: process.env.POSTGRESS_PASSWORD,
  database: process.env.POSTGRESS_DATABASE,
});

export { pool };
