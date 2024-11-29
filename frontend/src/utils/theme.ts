import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#e6e6e6',
    },
  },
});

export default responsiveFontSizes(theme);
