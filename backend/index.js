const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("DB connection successful!"))
	.catch((error) => console.log(error));

app.use(express.json());
app.use("/api/auth", authRoute);

app.listen(process.env.PORT || 5001, () => {
	console.log("Backend server is running on port 5001");
});
