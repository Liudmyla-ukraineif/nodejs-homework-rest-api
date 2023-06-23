const express = require("express");

const authController = require("../../controllers");

const schemas = require("../../schemas/users");

const { validateBody, authenticate, upload } = require("../../middlewares");

const router = express.Router();

// signup/register можливі назви для реєстрації user
// upload.array("poster", 8) якщо декілька файлів в одному полі- назва поля і кіл-сть файлів
// upload.fields([{name: "poster", maxCount:1}]) якщо файли в декількох полях
router.post(
  "/register",
  upload.single("avatarURL"),
  validateBody(schemas.userRegisterSchema),
  authController.signup
);

// signin/login можливі назви для логування user
router.post(
  "/login",
  validateBody(schemas.userLoginSchema),
  authController.signin
);

router.get("/current", authenticate, authController.getCurrent);

router.post("/logout", authenticate, authController.logout);

router.patch(
  "/subscription",
  authenticate,
  validateBody(schemas.userUpdateSubscriptionShema),
  authController.updateSubscription
);

router.patch("/avatars", authenticate, upload.single("avatarURL"), authController.updateAvatar);

module.exports = router;
