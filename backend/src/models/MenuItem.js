const mongoose = require("mongoose");

const MenuItemSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: true },
		pricePerPiece: { type: Number, required: true, min: 1 },
		category: { type: String, required: true },
		orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
		imageUrl: { type: String, required: true },
		stock: { type: Number, required: true, min: 0 },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("MenuItem", MenuItemSchema);
