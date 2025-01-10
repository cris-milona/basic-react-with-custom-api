// Sets up the Express server,
// handles API routes and serves the React application.

import dotenv from "dotenv";
import path from "path";
import express from "express";
import router from "./routes";
import cors from "cors";

dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", router);

app.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
