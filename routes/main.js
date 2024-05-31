const express = require("express");
const { dashboard, login } = require("../routes/main");
const authorizationMiddleware = require("../middleware/auth");
const router = express.Router();

router.route("").get(authorizationMiddleware, dashboard);
router.route("/").post(login);

module.exports = router;
