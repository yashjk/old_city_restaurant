const User = require("../models/User");

module.exports = {
	getUsers: async (req, res) => {
		try {
			const users = await User.find();
			res.status(200).json(users);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	// Get a user by ID
	getUserById: async (req, res) => {
		try {
			const user = await User.findById(req.params.id).populate(
				"reservations orders reviews"
			);
			if (!user) return res.status(404).json({ message: "User not found" });
			res.status(200).json(user);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	// Update a user
	updateUser: async (req, res) => {
		try {
			const updatedUser = await User.findByIdAndUpdate(
				req.params.id,
				req.body,
				{
					new: true,
				}
			);
			res.status(200).json(updatedUser);
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	},

	// Delete a user
	deleteUser: async (req, res) => {
		try {
			await User.findByIdAndDelete(req.params.id);
			res.status(200).json({ message: "User deleted" });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},
};
