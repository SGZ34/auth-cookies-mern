import { Router } from "express";
import {
  profile,
  updatePassword,
  updateProfile,
} from "../controllers/profile.controller.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { updatePasswordSchema } from "../schemas/updatePassword.js";
const router = Router();

router.get("/", verifyToken, profile);
router.put("/updateProfile", verifyToken, updateProfile);
router.put(
  "/updatePassword",
  verifyToken,
  validateSchema(updatePasswordSchema),
  updatePassword
);

export default router;
