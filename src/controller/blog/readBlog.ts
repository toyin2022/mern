import { Request, Response } from "express";
import blog from "../../model/blogSchema";

export const allBlogs = async (req: Request, res: Response) => {
  const allBlogs = await blog.find();
  res.status(200).json(allBlogs);
};
