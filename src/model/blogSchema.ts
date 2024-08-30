import { model, Schema } from "mongoose";

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    author: String,
  },
  { timestamps: true }
);
const blog = model("blogs", blogSchema);

export default blog;
