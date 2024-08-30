import { Request, Response } from "express";

export const Register = (req: Request, res: Response) => {
  res.json({ authenticated: true, message: "registration method" });
};
