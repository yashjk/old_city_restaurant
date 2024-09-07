const mongoose = require("mongoose");

const ReservationSchema = new mongoose.Schema(
	{
		userId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		OrderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Order",
			required: function () {
				return this.type === "reservation";
			},
		},
		date: { type: Date, required: true },
		time: { type: String, required: true },
		partySize: { type: Number, required: true, min: 1, max: 20 },
		contact: { type: String, required: true },
		specialRequest: { type: String },
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Reservation", ReservationSchema);
