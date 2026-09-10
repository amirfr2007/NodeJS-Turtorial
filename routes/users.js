const express = require("express");
const {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
  replaceUser,
  getUsersStats,
} = require("../controllers/usersController");
const router = express.Router();

router.get("/", getUsers);

router.get("/stats", getUsersStats);

router.get("/:id", getUserId);

router.post("/", createUser);

router.patch("/:id", updateUser);

router.delete("/:id", deleteUser);

router.put("/:id", replaceUser);

module.exports = router;
