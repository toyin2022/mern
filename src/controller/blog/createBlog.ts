import { Request, Response } from "express";
import blog from "../../model/blogSchema";

export const CreateBlog = async (req: Request, res: Response) => {
  const { title, content, author } = req.body;
  const newBlog = await new blog({
    title,
    content,
    author,
  });
  await newBlog.save();
  res.json(newBlog);
};
