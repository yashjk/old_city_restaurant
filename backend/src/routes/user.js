const express = require("express");
const {
	verifyTokenAndAdmin,
	verifyTokenAndAuthorization,
} = require("../auth/verifyToken");
const router = express.Router();
const {
	getUsers,
	getUserById,
	updateUser,
	deleteUser,
} = require("../controllers/userController");
const Reservation = require("../models/Reservation");
const Order = require("../models/Order");
const Review = require("../models/Review");

router.get("/", verifyTokenAndAdmin, getUsers);
router.get("/:id", verifyTokenAndAuthorization, getUserById);
router.put("/:id", verifyTokenAndAuthorization, updateUser);
router.delete("/:id", verifyTokenAndAdmin, deleteUser);

module.exports = router;
