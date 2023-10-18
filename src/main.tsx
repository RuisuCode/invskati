import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import PagKati from "./app.tsx";
import "./shared/styles/index.css";
import { theme } from "./shared/styled-components/theme/theme.ts";
import TableContent from "./shared/components/table-contents";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <TableContent />
    <CssBaseline />
    <PagKati />
  </ThemeProvider>
);
