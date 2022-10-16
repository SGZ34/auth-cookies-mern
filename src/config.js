import { config } from "dotenv";

config();

export const PORT = process.env.PORT || 4000;

export const DB_CONNECTION = process.env.DB_CONNECTION;

export const JWT_SECRET = process.env.JWT_SECRET;

export const NODE_ENV = process.env.NODE_ENV || "development";
