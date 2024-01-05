import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: { type: String },
    summary: { type: String },
    content: { type: String },
    cover: { type: String },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

export const POST = mongoose.model("POST", postSchema);
