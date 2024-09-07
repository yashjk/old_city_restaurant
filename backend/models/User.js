const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema(
	{
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: {
			type: String,
			required: function () {
				return this.type === "authenticated";
			},
		},
		type: {
			type: String,
			enum: ["authenticated", "guest", "admin"], // Only allow two types of users
			required: true,
			default: "guest",
		},
		reservations: [
			{ type: mongoose.Schema.Types.ObjectId, ref: "Reservation" },
		],
		orders: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }],
		reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
	},
	{ timestamps: true }
);

UserSchema.pre("save", async function (next) {
	const user = this;

	if (
		user.isModified("password") &&
		(user.type === "authenticated" || user.type === "admin")
	) {
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(user.password, salt);
	}
	next();
});

UserSchema.methods.comparePassword = async function (enteredPassword) {
	if (this.type === "guest") return false;
	return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", UserSchema);
