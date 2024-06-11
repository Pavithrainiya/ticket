const express = require('express');
const { createReservation, getReservations, updateReservation, deleteReservation } = require('../controllers/reservationController');

const router = express.Router();

router.post('/reservations', createReservation);
router.get('/reservations', getReservations);
router.put('/reservations/:id', updateReservation);
router.delete('/reservations/:id', deleteReservation);

module.exports = router;
