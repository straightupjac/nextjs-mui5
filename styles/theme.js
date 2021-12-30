import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    primary: {
      main: '#88b1b1',
    },
    secondary: {
      main: '#f2f7f8',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;