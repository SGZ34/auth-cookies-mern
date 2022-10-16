import { response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { JWT_SECRET } from "../config.js";

export const register = async (req, res = response) => {
  const { name, email, password } = req.body;

  try {
    const userValidate = await User.findOne({ email });
    if (userValidate) {
      return res
        .status(400)
        .json({ errorMessage: "User already exists with that email" });
    }
    const user = new User({ name, email, password });
    user.password = await user.hashPassword(password);
    await user.save();

    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    return res
      .status(200)
      .cookie("x-access-token", token, {
        sameSite: "lax",
        secure: false,
        httpOnly: true,
      })
      .json({ user: user.name });
  } catch (error) {
    return res.status(500).json({ errorMessage: error });
  }
};

export const login = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ errorMessage: "The credentials are not correct" });
    }

    const validPassword = await user.validatePassword(password);

    if (!validPassword) {
      return res
        .status(400)
        .json({ errorMessage: "The password is not correct" });
    }

    const token = jwt.sign(
      {
        id: user._id,
      },
      JWT_SECRET,
      {
        expiresIn: "30d",
      }
    );

    return res
      .status(200)
      .cookie("x-access-token", token, {
        sameSite: "lax",
        secure: false,
        httpOnly: true,
      })
      .json({ user: user.name });
  } catch (error) {
    return res.status(500).json({ errorMessage: error });
  }
};

export const revalidateToken = async (req, res = response) => {
  const { idUser } = req;

  const user = await User.findById(idUser);

  if (!user) {
    return res.status(404).json({ errorMessage: "the user don't exist" });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );

  return res
    .status(200)
    .cookie("x-access-token", token, {
      sameSite: "lax",
      secure: false,
      httpOnly: true,
    })
    .json({ user: user.name });
};

export const logout = async (req, res = response) => {
  res.clearCookie("x-access-token");
  return res.sendStatus(200);
};

