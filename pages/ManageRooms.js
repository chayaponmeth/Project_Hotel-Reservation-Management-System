import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, TextField, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import axios from 'axios';

const ManageRooms = () => {
    const [rooms, setRooms] = useState([]);
    const [newRoom, setNewRoom] = useState({ room_number: '', room_type: '', price_per_night: '', status: 'available' });

    useEffect(() => {
        fetchRooms();
    }, []);

    const fetchRooms = async () => {
        const response = await axios.get('http://localhost:5000/rooms');
        setRooms(response.data);
    };

    const handleAddRoom = async () => {
        await axios.post('http://localhost:5000/rooms', newRoom);
        fetchRooms();
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Manage Rooms
            </Typography>
            <Paper style={{ padding: 16, marginBottom: 16 }}>
                <Typography variant="h6" gutterBottom>
                    Add New Room
                </Typography>
                <TextField
                    label="Room Number"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    onChange={(e) => setNewRoom({ ...newRoom, room_number: e.target.value })}
                />
                <TextField
                    label="Room Type"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    onChange={(e) => setNewRoom({ ...newRoom, room_type: e.target.value })}
                />
                <TextField
                    label="Price per Night"
                    type="number"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    onChange={(e) => setNewRoom({ ...newRoom, price_per_night: e.target.value })}
                />
                <Button variant="contained" color="primary" onClick={handleAddRoom}>
                    Add Room
                </Button>
            </Paper>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Room Number</TableCell>
                            <TableCell>Room Type</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rooms.map((room) => (
                            <TableRow key={room.room_id}>
                                <TableCell>{room.room_number}</TableCell>
                                <TableCell>{room.room_type}</TableCell>
                                <TableCell>{room.price_per_night}</TableCell>
                                <TableCell>{room.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Container>
    );
};

export default ManageRooms;
