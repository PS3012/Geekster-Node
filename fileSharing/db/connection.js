import mongoose from "mongoose";
import {} from "dotenv/config.js";

export async function connectToDB() {
  await mongoose.connect(process.env.MONGO_URL);
}
