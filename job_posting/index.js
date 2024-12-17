import express from "express";
import {} from "dotenv/config.js";

import jobRouter from "./routes/job.route.js";
import connectDatabase from "./middlewares/connection.js";

const app = express();
await connectDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/job", jobRouter);

app.listen(process.env.PORT_NUMBER, () => {
  console.log("Server Started Successfully!");
});
