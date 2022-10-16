import { response } from "express";
import User from "../models/user.js";

export const profile = async (req, res = response) => {
  const { idUser } = req;

  try {
    const user = await User.findById(idUser);
    if (!user)
      return res.status(404).json({ errorMessage: "The user don't exist" });
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ errorMessage: error });
  }
};

export const updateProfile = async (req, res = response) => {
  const { idUser } = req;

  const { name, email } = req.body;

  try {
    await User.findByIdAndUpdate(idUser, { name, email });
    return res.status(200).json({ user: name });
  } catch (error) {
    return res.status(500).json({ errorMessage: error });
  }
};

export const updatePassword = async (req, res = response) => {
  const { idUser } = req;

  res.sedn;
  const { password, newPassword, confirmPassword } = req.body;

  try {
    const user = await User.findById(idUser);

    if (!user)
      return res.status(404).json({ errorMessage: "The user don't exist" });

    if (await !user.validatePassword(password))
      return res
        .status(400)
        .json({ errorMessage: "the password is not correct" });

    user.password = await user.hashPassword(newPassword);

    user.save();
    return res.sendStatus(200);
  } catch (error) {
    return res.status(500).json({ errorMessage: error });
  }
};
