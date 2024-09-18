const Review = require("../models/Review");

// Get all reviews
module.exports = {
	getReviews: async (req, res) => {
		try {
			const reviews = await Review.find().populate("userId orderId");
			res.status(200).json(reviews);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	// Create a review
	createReview: async (req, res) => {
		const { userId, orderId, feedback, rating } = req.body;
		try {
			const review = new Review({ userId, orderId, feedback, rating });
			await review.save();
			res.status(201).json(review);
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	},

	// Get review by ID
	getReviewById: async (req, res) => {
		try {
			const review = await Review.findById(req.params.id);
			if (!review) return res.status(404).json({ message: "Review not found" });
			res.status(200).json(review);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	// Update a review
	updateReview: async (req, res) => {
		try {
			const updatedReview = await Review.findByIdAndUpdate(
				req.params.id,
				req.body,
				{ new: true }
			);
			res.status(200).json(updatedReview);
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	},

	// Delete a review
	deleteReview: async (req, res) => {
		try {
			await Review.findByIdAndDelete(req.params.id);
			res.status(200).json({ message: "Review deleted" });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},
};
