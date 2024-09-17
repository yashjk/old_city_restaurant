const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
			index: true,
		},
		type: {
			type: String,
			enum: ["online", "pickup", "reservation"],
			required: true,
		},
		totalAmount: {
			type: Number,
			required: true,
			min: 0,
		},
		reservationId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Reservation",
			required: function () {
				return this.type === "reservation";
			},
			index: true,
		},
		menuItems: [
			{
				itemId: { type: mongoose.Schema.Types.ObjectId, ref: "MenuItem" },
				quantity: { type: Number, required: true, min: 1 },
				price: { type: Number, required: true, min: 0 },
			},
		],
		review: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Review",
		},
	},
	{ timestamps: true }
);

OrderSchema.methods.calculateTotalAmount = function () {
	const totalAmount = this.menuItems.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);
	return totalAmount;
};

module.exports = mongoose.model("Order", OrderSchema);
