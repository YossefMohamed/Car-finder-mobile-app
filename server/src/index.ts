// create express simple server

import express from "express";
import { createServer } from "http";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const server = createServer(app);
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
