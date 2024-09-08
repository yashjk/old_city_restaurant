const OrderSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
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

module.exports = mongoose.model("Order", OrderSchema);
