import { Route, Routes } from "react-router-dom";
import PagKati from "../app";
import TableScon from "../pages/table-scon/index";

export default function RouterApp(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<PagKati />} />
      <Route path="/table-scon" element={<TableScon />} />
    </Routes>
  );
}
