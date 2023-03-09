// create express simple server

import { createServer } from "http";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });
import morgan from "morgan";
import express, { Request, Response } from "express";
import { errorHandler } from "./middlewares/error-handler";
import cors from "cors";
const app = express();
const corsOptions = { credentials: true, origin: "http://localhost:3000" };
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors(corsOptions));
const router = express.Router();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  console.log();
  res.send("Server is running :)");
});

app.use(router);

app.use(errorHandler);

const port = process.env.PORT || 3000;

const server = createServer(app);
server.listen(port, () => {
  console.log("Server is running on port " + port);
});
