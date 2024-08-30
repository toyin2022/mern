import { Router } from "express";
import { Login } from "../controller/auth/login";
import { Register } from "../controller/auth/register";

const router = Router();

router.get("/login", Login);
router.get("/register", Register);

export default router;
