const router = require("express").Router();
const {
  createThought,
  getAllThoughts,
  updateThoughtsById,
  deleteThoughtsById,
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThoughts).post(createThought);

router
  .route("/:id")
  .get(getAllThoughts)
  .post(createThought)
  .put(updateThoughtsById)
  .delete(deleteThoughtsById);

router.route("/:id/reactions")
.post(createReaction);

router.route("/:id/reactions/:reactid")
.delete(deleteReaction);

module.exports = router;
