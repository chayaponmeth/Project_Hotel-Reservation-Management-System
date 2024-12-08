import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Dashboard = () => {
    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Hotel Management Dashboard
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Total Rooms</Typography>
                            <Typography variant="h4" color="primary">45</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Booked Rooms</Typography>
                            <Typography variant="h4" color="secondary">30</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Available Rooms</Typography>
                            <Typography variant="h4" color="success">15</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Dashboard;
