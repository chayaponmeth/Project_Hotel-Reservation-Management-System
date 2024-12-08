const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db'); // เชื่อมฐานข้อมูล

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
const roomRoutes = require('./routes/rooms');
const reservationRoutes = require('./routes/reservations');
const customerRoutes = require('./routes/customers');

app.use('/rooms', roomRoutes);
app.use('/reservations', reservationRoutes);
app.use('/customers', customerRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
