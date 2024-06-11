const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    trainNumber: { type: String, required: true },
    date: { type: Date, required: true },
    travelClass: { type: String, required: true },
    amount: { type: Number, required: true }
});

const Reservation = mongoose.model('Reservation', reservationSchema);

module.exports = Reservation;
