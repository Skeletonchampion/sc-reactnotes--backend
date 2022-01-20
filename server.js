import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 4000;

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    credentials: true,
    origin: ["https://sc-reactnotes.netlify.app", "http://localhost:3000", "http://localhost:3002"],
    exposedHeaders: ["set-cookie"]
}));
app.use(cookieParser());

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.get("/", (req, res) => {
    res.send("okay");
});

app.listen(PORT, () => {
    console.log("App is running on port " + PORT);
});