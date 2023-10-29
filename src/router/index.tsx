import { Route, Routes } from "react-router-dom";
import PagKati from "../app";
import TableScon from "../pages/table-scon/index";
import TableSinfo from "../pages/table-sinfo/index";

export default function RouterApp(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<PagKati />} />
      <Route path="/table-scon" element={<TableScon />} />
      <Route path="/table-sinfo" element={<TableSinfo />} />
    </Routes>
  );
}
