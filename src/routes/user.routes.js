import { Router } from "express";
import {
  changeAccountDetails,
  changeCurrentPassword,
  getCurrentUser,
  getUserChannelProfile,
  getWatchHistory,
  logOutUser,
  loginUser,
  refreshAccessToken,
  registerUser,
  updateUserAvatar,
  updateUserCoverImg,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
  "/register",
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);

router.post("/login", loginUser);

// secured routes
router.post("/logout", verifyJWT, logOutUser);
router.post("/refresh-token", refreshAccessToken);
router.post("/change-pass", verifyJWT, changeCurrentPassword);
router.get("/current-user", verifyJWT, getCurrentUser);
router.patch("/update-acc", verifyJWT, changeAccountDetails);
router.patch("/avatar", verifyJWT, upload.single("avatar"), updateUserAvatar);
router.patch(
  "/cover-img",
  verifyJWT,
  upload.single("coverImage"),
  updateUserCoverImg
);
router.get("/c/:username", verifyJWT, getUserChannelProfile);
router.get("/history", verifyJWT, getWatchHistory);

export default router;
