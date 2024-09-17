const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = {
	register: async (req, res) => {
		const { firstName, lastName, email, type } = req.body;
		const originalPassword = req.body.password;

		// Validate required fields
		if (!firstName || !lastName || !email) {
			return res
				.status(400)
				.json({ message: "First name, last name, and email are required" });
		}

		if (type !== "guest") {
			// Ensure password is provided for non-guest users
			if (!originalPassword) {
				return res.status(400).json({ message: "Password is required" });
			}

			if (originalPassword.length < 6) {
				return res
					.status(400)
					.json({ message: "Password must be at least 6 characters long" });
			}
		}

		try {
			const existingUser = await User.findOne({ email });
			if (existingUser) {
				return res
					.status(400)
					.json({ message: "User already exists with the same email" });
			}

			let newUser;

			if (type === "guest") {
				newUser = new User({
					firstName,
					lastName,
					email,
					type,
				});
			} else {
				newUser = new User({
					firstName,
					lastName,
					email,
					password: originalPassword,
					type,
				});
			}

			const savedUser = await newUser.save();
			const { password, ...others } = savedUser._doc;

			res
				.status(201)
				.json({ message: "User created successfully", user: others });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},

	login: async (req, res) => {
		if (!req.body.email || !req.body.password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		try {
			const user = await User.findOne({ email: req.body.email });
			!user && res.status(400).json({ message: "User does not exist" });

			const isMatch = await user.comparePassword(req.body.password);
			!isMatch && res.status(400).json({ message: "Invalid credentials" });

			const token = jwt.sign(
				{ userId: user._id, type: user.type },
				process.env.JWT_SEC,
				{
					expiresIn: "3d",
				}
			);

			const { password, ...others } = user._doc;

			res.status(200).json({ message: "Login successful", token, others });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
};
