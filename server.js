import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";
import apiRouter from "./routes/index.js";
import ErrorMiddleware from "./middlewares/error.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/api", apiRouter);
connectDB();

const startServer = () => {
  // app.use(ErrorMiddleware);
  app.listen(process.env.PORT, () => {
    console.log(`server is running on port ${process.env.PORT}`);
  });
};

startServer();
