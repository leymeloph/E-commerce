// Import packages
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";

dotenv.config(); // load .env file
const app = express();

app.use(cors()); // allow frontend to connect
app.use(express.json()); // parse JSON body

// Routes
app.use("/api/auth", authRoutes); // auth endpoints (login/register)

// Connect to MongoDB and start server
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(5000, () => console.log("✅ Server running on port 5000")))
  .catch((err) => console.error(err));
