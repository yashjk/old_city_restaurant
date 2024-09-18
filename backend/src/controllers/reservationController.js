const Reservation = require("../models/Reservation");

// Get all reservations
module.exports = {
	getReservations: async (req, res) => {
		try {
			const reservations = await Reservation.find().populate("userId orders");
			res.status(200).json(reservations);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	// Create a reservation
	createReservation: async (req, res) => {
		const { userId, date, time, partySize, contact, specialRequest } = req.body;
		try {
			const reservation = new Reservation({
				userId,
				date,
				time,
				partySize,
				contact,
				specialRequest,
			});
			await reservation.save();
			res.status(201).json(reservation);
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	},

	// Get reservation by ID
	getReservationById: async (req, res) => {
		try {
			const reservation = await Reservation.findById(req.params.id).populate(
				"userId orders"
			);
			if (!reservation)
				return res.status(404).json({ message: "Reservation not found" });
			res.status(200).json(reservation);
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},

	// Update a reservation
	updateReservation: async (req, res) => {
		try {
			const updatedReservation = await Reservation.findByIdAndUpdate(
				req.params.id,
				req.body,
				{ new: true }
			);
			res.status(200).json(updatedReservation);
		} catch (err) {
			res.status(400).json({ message: err.message });
		}
	},

	// Delete a reservation
	deleteReservation: async (req, res) => {
		try {
			await Reservation.findByIdAndDelete(req.params.id);
			res.status(200).json({ message: "Reservation deleted" });
		} catch (err) {
			res.status(500).json({ message: err.message });
		}
	},
};
