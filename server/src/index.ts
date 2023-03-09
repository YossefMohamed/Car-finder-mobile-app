// create express simple server

import { createServer } from "http";
import path from "path";
import * as dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../.env") });
import morgan from "morgan";
import express, { NextFunction, Request, Response } from "express";
import { errorHandler } from "./middlewares/error-handler";
import cors from "cors";
import { Prisma } from "@prisma/client";

import prisma from "./services/prismaClient";
import mainRouter from "./routes";
import { NotFoundError } from "./errors/not-found-error";
const app = express();
const corsOptions = { credentials: true, origin: "http://localhost:3000" };
app.use(express.static(path.join(__dirname, "../public")));

app.use(cors(corsOptions));
const router = express.Router();
app.use(morgan("dev"));
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
});
router.use("/api", mainRouter);
router.use("*", (req: Request, res: Response, next: NextFunction) => {
  return next(new NotFoundError());
});
app.use(router);

app.use(errorHandler);

const port = process.env.PORT || 3000;

const server = createServer(app);
server.listen(port, async () => {
  console.log("Server is running on port " + port);
});
