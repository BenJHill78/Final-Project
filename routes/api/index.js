const router = require("express").Router();
const requestRoutes = require("./request");

// neighborhood routes
router.use("/request", requestRoutes);

module.exports = router;
