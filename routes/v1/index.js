import express from "express";

import {
  changePassword,
  getMyProfile,
  login,
  logout,
  register,
  updateProfile,
} from "../../controllers/user-controller.js";

import { isAuthenticated } from "../../middlewares/auth.js";
import { sendMessage } from "../../controllers/message-controller.js";

const router = express.Router();

//  ALL APIs for users
router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/me", isAuthenticated, getMyProfile);
router.put("/changepassword", isAuthenticated, changePassword);
router.put("/updateprofile", isAuthenticated, updateProfile);

router.post("/message", sendMessage);

export default router;
