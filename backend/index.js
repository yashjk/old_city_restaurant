const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Routes
const authRoute = require("./src/routes/auth");
const usersRoute = require("./src/routes/user");
const menuItemsRoute = require("./src/routes/menuItem");
const ordersRoute = require("./src/routes/order");
const reservationsRoute = require("./src/routes/reservation");
const reviewsRoute = require("./src/routes/review");

dotenv.config();

mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("DB connection successful!"))
	.catch((error) => console.log(error));

// Use routes
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/menuItems", menuItemsRoute);
app.use("/api/orders", ordersRoute);
app.use("/api/reservations", reservationsRoute);
app.use("/api/reviews", reviewsRoute);

app.listen(process.env.PORT || 5001, () => {
	console.log("Backend server is running on port 5001");
});
