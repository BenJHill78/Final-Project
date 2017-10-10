const router = require("express").Router();
const requestsController = require("../../controllers/requestController");

// Matches with "/api/neighborhoods"
router.route("/")
  .get(requestsController.findAll)
  .post(requestsController.create);

// Matches with "/api/neighborhoods/:id"
router
  .route("/:id")
  .get(requestsController.findById)
  .put(requestsController.update)
  .delete(requestsController.remove);

module.exports = router;
