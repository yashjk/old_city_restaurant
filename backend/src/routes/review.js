const express = require("express");
const router = express.Router();
const {
	getReviews,
	createReview,
	getReviewById,
	updateReview,
	deleteReview,
} = require("../controllers/reviewController");
const { verifyTokenAndAdmin, verifyToken } = require("../auth/verifyToken");

router.get("/", verifyTokenAndAdmin, getReviews);
router.post("/", verifyToken, createReview);
router.get("/:id", getReviewById);
router.put("/:id", verifyToken, updateReview);
router.delete("/:id", verifyToken, deleteReview);

module.exports = router;
