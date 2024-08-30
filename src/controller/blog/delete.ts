import { Request, Response } from "express";
import blog from "../../model/blogSchema";

export const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const delBlog = await blog.findByIdAndDelete(id);

  return res.status(200).json("blog deleted successfully");
};
