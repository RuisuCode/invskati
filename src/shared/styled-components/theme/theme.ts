import { createTheme } from "@mui/material";
import "@fontsource/rubik/400.css";
const theme = createTheme({
  palette: {
    primary: { main: "#000", light: "#46A7DA" },
    secondary: { main: "#fff" },
  },
  typography: {
    fontFamily: [
      "rubik",
      "Public Sans",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});

export { theme };
