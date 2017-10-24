const router = require("express").Router();
const authRoutes = require("./auth");
const requestRoutes = require("./requests");

// Auth routes
router.use("/auth", authRoutes);
// neighborhood routes
router.use("/requests", requestRoutes);

module.exports = router;
