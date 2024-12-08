const express = require('express');
const db = require('../db');
const router = express.Router();

// Create Room
router.post('/', (req, res) => {
    const { room_number, room_type, price_per_night, status } = req.body;
    const query = 'INSERT INTO rooms (room_number, room_type, price_per_night, status) VALUES (?, ?, ?, ?)';
    db.query(query, [room_number, room_type, price_per_night, status], (err, result) => {
        if (err) throw err;
        res.status(201).send('Room created');
    });
});

// Read Rooms
router.get('/', (req, res) => {
    const query = 'SELECT * FROM rooms';
    db.query(query, (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Update Room
router.put('/:id', (req, res) => {
    const { room_number, room_type, price_per_night, status } = req.body;
    const query = 'UPDATE rooms SET room_number = ?, room_type = ?, price_per_night = ?, status = ? WHERE room_id = ?';
    db.query(query, [room_number, room_type, price_per_night, status, req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Room updated');
    });
});

// Delete Room
router.delete('/:id', (req, res) => {
    const query = 'DELETE FROM rooms WHERE room_id = ?';
    db.query(query, [req.params.id], (err, result) => {
        if (err) throw err;
        res.send('Room deleted');
    });
});

module.exports = router;
