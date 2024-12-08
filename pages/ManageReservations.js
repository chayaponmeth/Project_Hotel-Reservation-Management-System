import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import axios from 'axios';

const ManageReservations = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        fetchReservations();
    }, []);

    const fetchReservations = async () => {
        const response = await axios.get('http://localhost:5000/reservations');
        setReservations(response.data);
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Manage Reservations
            </Typography>
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Reservation ID</TableCell>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Room Number</TableCell>
                            <TableCell>Check-In</TableCell>
                            <TableCell>Check-Out</TableCell>
                            <TableCell>Status</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {reservations.map((res) => (
                            <TableRow key={res.reservation_id}>
                                <TableCell>{res.reservation_id}</TableCell>
                                <TableCell>{res.customer_name}</TableCell>
                                <TableCell>{res.room_number}</TableCell>
                                <TableCell>{res.check_in_date}</TableCell>
                                <TableCell>{res.check_out_date}</TableCell>
                                <TableCell>{res.status}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Container>
    );
};

export default ManageReservations;
