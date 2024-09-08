const router = require("express").Router();
const { register, login } = require("../controllers/authController");

// Sign Up
router.post("/register", register);

// Login
router.post("/login", login);

module.exports = router;
