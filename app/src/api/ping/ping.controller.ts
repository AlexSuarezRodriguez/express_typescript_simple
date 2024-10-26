// chat.controller.ts
import { Request, Response, NextFunction } from "express";

export const ping = (req: Request, res: Response): void => {
  try {
    res.status(200).json({
      success: true,
      message: "Hello World!",
      date: new Date(),
      url: req.url
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
