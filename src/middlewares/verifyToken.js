import { request, response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";

export const verifyToken = async (req = request, res = response, next) => {
  try {
    const token = req.cookies["x-access-token"];
    if (!token) {
      return res.sendStatus(204);
    }
    const { id } = jwt.verify(token, JWT_SECRET);

    req.idUser = id;

    next();
  } catch (error) {
    return res.status(400).json({ errorMessage: error });
  }
};
