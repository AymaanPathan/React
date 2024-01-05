/* eslint-disable no-unused-vars */

import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import User from "./Client/models/User.model.js";
import Jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
import multer from "multer";
import fs from "fs";
import { POST } from "./Client/models/Post.model.js";

const uploadMiddleWare = multer({
  dest: "uploads/",
  limits: {
    fieldSize: 1024 * 1024 * 5, // 5 MB (adjust as needed)
  },
});

const app = express();
const port = 3000;

// Defined Custom CorsOption
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};

// MiddleWares
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use("/uploads", express.static(__dirname + "/uploads"));
console.log("__dirname:", __dirname);

// Database Connection
// Pass = vqPrhryEbKrd3Bix
// UseraName  =aymaanpathan5

async function connectDB() {
  try {
    const response = await mongoose.connect(
      "mongodb+srv://aymaanpathan5:vqPrhryEbKrd3Bix@cluster0.yb4z5u0.mongodb.net/aymaan"
    );
    // Response is not directly JSON, so you may want to log the response directly or extract relevant information
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectDB();

// PassWord Hashing in Register
const salt = bcrypt.genSaltSync(10);
const secret = "qwertyuiop";
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const existedUser = User.findOne({ username });
    if (existedUser) {
      console.log("User is Already Exist");
    }
    const hashedPass = bcrypt.hashSync(password, salt);
    const userDoc = await User.create({
      username: username,
      password: hashedPass,
    });
    res.json(userDoc);
  } catch (error) {
    console.log("error during registration", error);
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const passOk = bcrypt.compareSync(password, user.password);
    if (passOk) {
      Jwt.sign({ username, id: user._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token);
        res.json({ username, id: user._id });
      });
    }
  } catch (err) {
    console.log(err);
  }
});

// Profile
app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  Jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json({ info });
  });
});

// Logout
app.post("/logout", (req, res) => {
  res.clearCookie("token", { path: "/" });
  res.json({ message: "Logged out successfully" });
});

// Post
app.post("/post", uploadMiddleWare.single("file"), async (req, res) => {
  try {
    const { originalname, path } = req.file;
    const filePath = originalname.split(".");
    const ext = filePath[filePath.length - 1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    const { title, summary, content } = req.body;
    const { token } = req.cookies;
    Jwt.verify(token, secret, {}, async (err, info) => {
      if (err) throw err;

      const postDoc = await POST.create({
        title,
        summary,
        content,
        cover: newPath,
        author: info.id,
      });

      res.json(postDoc);
    });
  } catch (error) {
    console.error("Error creating a new post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/post", async (req, res) => {
  res.json(
    await POST.find()
      .populate("author", ["username"])
      .sort({ createdAt: -1 })
      .limit(20)
  );
});

// SinglePost
app.get("/post/:id", async (req, res) => {
  const { id } = req.params;
  const postDoc = await POST.findById(id).populate("author", ["username"]);
  res.json(postDoc);
});

// EditPost
app.put("/post", uploadMiddleWare.single("file"), (req, res) => {
  if (req.file) {
    let newPath = null;
    const { originalname, path } = req.file;
    const filePath = originalname.split(".");
    const ext = filePath[filePath.length - 1];
    newPath = path + "." + ext;
    fs.renameSync(path, newPath);
  }
  const { token } = req.cookies;
  Jwt.verify(token, secret, {}, async (err, info) => {
    if (err) throw err;
    const { id, title, summary, content } = req.body;
    const postDoc = await POST.findById(id);
    const isAuthor = JSON.stringify(postDoc.author) === JSON.stringify(info.id);
    if (!isAuthor) {
      return res.status(400).json("You Are Not An Author");
    }
    await POST.updateOne(
      { _id: postDoc._id },
      {
        title,
        summary,
        content,
        cover: postDoc.cover,
      }
    );

    res.json(postDoc);
  });
});

app.listen(port, () => {
  console.log(`Server Is On In Port ${port}`);
});
