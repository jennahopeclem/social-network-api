const router = require("express").Router();
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../../controllers/userController");

router.route("/").get(getAllUsers).post(createUser);

router
  .route("/:id")
  .get(getUserById)
  .put(updateUserById)
  .delete(deleteUserById);

module.exports = router;
