import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import "reflect-metadata";
import { connectDatabase } from "./Database/db";
import router from "./Router/userRoute";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/", router);

app.get("/", (req, res) => {
  res.send("Hello, TypeScript Backend!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  try {
    connectDatabase();
  } catch (err) {
    console.log("Error while connecitong Database");
  }
});
