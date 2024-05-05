import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credential: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

import errorHandler from "./middleware/errorHandler.middleware.js";
import userRouter from "./routes/user.route.js";
import ApiError from "./utils/ApiError.util.js";

app.use("/api/v1/user", userRouter);
app.use("*", (req) => {
  throw new ApiError(404, `Can't find ${req.originalUrl} on the server`);
});
app.use(errorHandler);

export default app;
