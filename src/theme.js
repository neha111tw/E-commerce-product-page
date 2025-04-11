import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2e86de',
    },
    secondary: {
      main: '#ff4757',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          transition: 'transform 0.2s',
          '&:hover': {
            transform: 'translateY(-5px)',
          },
        },
      },
    },
  },
});

export default theme;