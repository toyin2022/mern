import { Router } from "express";
import { CreateBlog } from "../controller/blog/createBlog";
import { allBlogs } from "../controller/blog/readBlog";
import { editBlog } from "../controller/blog/editBlog";
import { deleteBlog } from "../controller/blog/delete";

const router = Router();

router.post("/create", CreateBlog);
router.get("/all-blogs", allBlogs);
router.put("/edit-blog/:id", editBlog);
router.delete("/delete-blog/:id", deleteBlog);
// router.get("/register", Register);

export default router;
