const express = require("express");
const router = express.Router();
const {
	getMenuItems,
	createMenuItem,
	getMenuItemById,
	updateMenuItem,
	deleteMenuItem,
} = require("../controllers/menuItemController");

router.get("/", getMenuItems);
router.post("/", createMenuItem);
router.get("/:id", getMenuItemById);
router.put("/:id", updateMenuItem);
router.delete("/:id", deleteMenuItem);

module.exports = router;
