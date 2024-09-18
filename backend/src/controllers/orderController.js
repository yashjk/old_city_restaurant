const Order = require("../models/Order");

// Get all orders
module.exports = {
	getOrders: async (req, res) => {
		try {
			const orders = await Order.find().populate(
				"userId menuItems.itemId review reservationId"
			);
			res.status(200).json(orders);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	// Create an order
	createOrder: async (req, res) => {
		const { userId, type, menuItems, reservationId } = req.body;
		try {
			const order = new Order({ userId, type, menuItems, reservationId });
			order.totalAmount = order.calculateTotalAmount();
			await order.save();
			res.status(201).json(order);
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	},

	// Get order by ID
	getOrderById: async (req, res) => {
		try {
			const order = await Order.findById(req.params.id).populate(
				"userId menuItems.itemId review reservationId"
			);
			if (!order) return res.status(404).json({ message: "Order not found" });
			res.status(200).json(order);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	// Update an order
	updateOrder: async (req, res) => {
		try {
			const updatedOrder = await Order.findByIdAndUpdate(
				req.params.id,
				req.body,
				{ new: true }
			);
			res.status(200).json(updatedOrder);
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	},

	// Delete an order
	deleteOrder: async (req, res) => {
		try {
			await Order.findByIdAndDelete(req.params.id);
			res.status(200).json({ message: "Order deleted" });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},
};
