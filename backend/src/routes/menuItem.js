const express = require("express");
const router = express.Router();
const {
	getMenuItems,
	createMenuItem,
	getMenuItemById,
	updateMenuItem,
	deleteMenuItem,
} = require("../controllers/menuItemController");
const { verifyTokenAndAdmin } = require("../auth/verifyToken");

router.get("/", getMenuItems);
router.post("/", verifyTokenAndAdmin, createMenuItem);
router.get("/:id", getMenuItemById);
router.put("/:id", verifyTokenAndAdmin, updateMenuItem);
router.delete("/:id", verifyTokenAndAdmin, deleteMenuItem);

module.exports = router;
