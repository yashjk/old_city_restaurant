const MenuItem = require("../models/MenuItem");

module.exports = {
	// Get all menu items
	getMenuItems: async (req, res) => {
		try {
			const items = await MenuItem.find();
			res.status(200).json(items);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	// Create a menu item
	createMenuItem: async (req, res) => {
		const {
			name,
			description,
			pricePerPiece,
			category,
			stock,
			imageUrl,
			orderId,
		} = req.body;
		try {
			const menuItem = new MenuItem({
				name,
				description,
				pricePerPiece,
				category,
				stock,
				imageUrl,
				orderId,
			});
			await menuItem.save();
			res.status(201).json(menuItem);
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	},

	// Get menu item by ID
	getMenuItemById: async (req, res) => {
		try {
			const item = await MenuItem.findById(req.params.id).populate("orderId");
			if (!item)
				return res.status(404).json({ message: "Menu item not found" });
			res.status(200).json(item);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	// Update a menu item
	updateMenuItem: async (req, res) => {
		try {
			const updatedItem = await MenuItem.findByIdAndUpdate(
				req.params.id,
				req.body,
				{ new: true }
			);
			res.status(200).json(updatedItem);
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	},

	// Delete a menu item
	deleteMenuItem: async (req, res) => {
		try {
			await MenuItem.findByIdAndDelete(req.params.id);
			res.status(200).json({ message: "Menu item deleted" });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},
};
