import { connect } from "mongoose";
import { DB_CONNECTION } from "../config.js";

export const connectDB = async () => {
  try {
    await connect(DB_CONNECTION);
    console.log("database connected");
  } catch (error) {
    throw new Error("Error al momento de conectarse a la base de datos");
  }
};
