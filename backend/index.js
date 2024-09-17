const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Routes
const authRoute = require("./src/routes/auth");
const userRoute = require("./src/routes/user");

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("DB connection successful!"))
	.catch((error) => console.log(error));

// Use routes
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5001, () => {
	console.log("Backend server is running on port 5001");
});
