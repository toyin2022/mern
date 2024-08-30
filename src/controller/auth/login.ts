import { Request, Response } from "express";

export const Login = (req: Request, res: Response) => {
  res.json({ authenticated: true });
};
