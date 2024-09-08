const User = require("../models/User");
const jwt = require("jsonwebtoken");

module.exports = {
	register: async (req, res) => {
		const { firstName, lastName, email, password, type } = req.body;

		const existingUser = await User.findOne({ email });

		if (type === "guest") {
			if (!firstName || !lastName || !email) {
				return res
					.status(400)
					.json({ message: "First name, last name and email are required" });
			}
		} else {
			if (!firstName || !lastName || !email || !password) {
				return res.status(400).json({ message: "All fields are required" });
			}
			if (password.length < 6) {
				return res
					.status(400)
					.json({ message: "Password must be at least 6 characters long" });
			}
		}

		if (existingUser) {
			return res
				.status(400)
				.json({ message: "User already exists with the same email" });
		}

		try {
			const newUser = new User({
				firstName,
				lastName,
				email,
				password,
				type: type || "authenticated",
			});

			const savedUser = await user.save();
			delete savedUser.password;

			res
				.status(201)
				.json({ message: "User created successfully", user: savedUser });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
	login: async (req, res) => {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		try {
			const user = await User.findOne({ email });
			if (!user) {
				return res.status(400).json({ message: "User does not exist" });
			}

			const isMatch = await user.comparePassword(password);
			if (!isMatch) {
				return res.status(400).json({ message: "Invalid credentials" });
			}

			const token = jwt.sign(
				{ userId: user._id, type: user.type },
				process.env.JWT_SEC,
				{
					expiresIn: "3d",
				}
			);

			delete user.password;
			res.status(200).json({ user, token });
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	},
};
