import { Request, Response } from "express";
import blog from "../../model/blogSchema";

export const editBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, likes } = req.body;

  const edittedblog = await blog.findByIdAndUpdate(
    id,
    {
      title,
      content,
      likes,
    },
    { new: true }
  );
  await edittedblog?.save();
  res.status(203).json(edittedblog);
};
