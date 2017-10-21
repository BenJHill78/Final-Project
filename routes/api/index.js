const router = require("express").Router();
const authRoutes = require("./auth");
const requestRoutes = require("./requests");

// Auth routes
router.use("/auth", authRoutes);
// neighborhood routes
router.use("/request", requestRoutes);

module.exports = router;
