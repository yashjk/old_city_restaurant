const express = require("express");
const router = express.Router();
const {
	getOrders,
	createOrder,
	getOrderById,
	updateOrder,
	deleteOrder,
} = require("../controllers/orderController");
const User = require("../models/User");
const Reservation = require("../models/Reservation");
const Review = require("../models/Review");

router.get("/", getOrders);
router.post("/", createOrder);
router.get("/:id", getOrderById);
router.put("/:id", updateOrder);
router.delete("/:id", deleteOrder);

module.exports = router;
