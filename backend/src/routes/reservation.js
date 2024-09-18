const express = require("express");
const router = express.Router();
const {
	getReservations,
	createReservation,
	getReservationById,
	updateReservation,
	deleteReservation,
} = require("../controllers/reservationController");

router.get("/", getReservations);
router.post("/", createReservation);
router.get("/:id", getReservationById);
router.put("/:id", updateReservation);
router.delete("/:id", deleteReservation);

module.exports = router;
