import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#D8AC54",
    },
    secondary: {
      main: "#000000",
    },
  },
  typography: {
    h1: {
      fontFamily: "Roboto Condensed",
    },
    h2: {
      fontFamily: "Roboto Condensed",
    },

    h3: {
      fontFamily: "Roboto Condensed",
      fontWeight: 300,
    },
    h4: {
      fontFamily: "Roboto Condensed",
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: "20px",
      fontFamily: "Roboto Condensed",
    },
    subtitle2: {
      fontWeight: 300,
      fontSize: "18px",
      fontFamily: "Roboto Condensed",
    },
  },
});
