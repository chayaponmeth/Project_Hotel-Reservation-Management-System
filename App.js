import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ManageRooms from './pages/ManageRooms';
import ManageReservations from './pages/ManageReservations';
import { ThemeProvider } from '@mui/material/styles';
import theme from '/theme';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/rooms" element={<ManageRooms />} />
                <Route path="/reservations" element={<ManageReservations />} />
            </Routes>
        </Router>
    );
}
function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* Routes */}
        </ThemeProvider>
    );
}

export default App;
