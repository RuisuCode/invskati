import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import "./shared/styles/index.css";
import { theme } from "./shared/styled-components/theme/theme.ts";
import { BrowserRouter } from "react-router-dom";
import RouterApp from "./router/index.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterApp />
    </ThemeProvider>
  </BrowserRouter>
);
