import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#E7D323',
    },
    secondary: {
      main: '#CB23E7',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;