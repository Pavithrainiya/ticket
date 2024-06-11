const Reservation = require('../models/reservationModel');

const createReservation = async (req, res) => {
    try {
        const { name, trainNumber, date, travelClass, amount } = req.body;
        const newReservation = new Reservation({ name, trainNumber, date, travelClass, amount });
        const savedReservation = await newReservation.save();
        res.status(201).json(savedReservation);
    } catch (error) {
        res.status(500).json({ message: 'Error creating reservation' });
    }
};

const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.json(reservations);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching reservations' });
    }
};

const updateReservation = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, trainNumber, date, travelClass, amount } = req.body;
        const updatedReservation = await Reservation.findByIdAndUpdate(id, { name, trainNumber, date, travelClass, amount }, { new: true });
        if (!updatedReservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        res.json(updatedReservation);
    } catch (error) {
        res.status(500).json({ message: 'Error updating reservation' });
    }
};

const deleteReservation = async (req, res) => {
    try {
        const { id } = req.params;
        
        const deletedReservation = await Reservation.findByIdAndDelete(id);
        if (!deletedReservation) {
            return res.status(404).json({ message: 'Reservation not found' });
        }
        
        // Successfully deleted reservation
        res.status(204).send();
    } catch (error) {
        console.error('Error deleting reservation:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = {
    createReservation,
    getReservations,
    updateReservation,
    deleteReservation,
};
