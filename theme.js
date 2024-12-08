import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: { main: '#1976d2' },
        secondary: { main: '#ff4081' },
        success: { main: '#4caf50' },
    },
    typography: {
        fontFamily: 'Roboto, Arial',
    },
});

export default theme;
