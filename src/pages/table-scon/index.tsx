import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Stack, Typography } from "@mui/material";
import ResponsiveDrawer from "../../shared/components/HeaderAndDrawer";

function createData(
  name: string,
  calories: string,
  fat: string,
  carbs: string
) {
  return { name, calories, fat, carbs };
}

const rows = [
  createData(
    "60",
    "Peter Drucker",
    `Lo más importante no  era la cantidad 
    de conocimiento, sino su productividad `,
    "La era de la discontinuidad"
  ),
  createData(
    "2000",
    "Manuel Castells",
    " “La sociedad red se caracteriza por la interconexión global de las personas y las organizaciones a través de las tecnologías de la información y la comunicación (TIC).” ",
    "La era de la información"
  ),
  createData(
    "2005",
    "UNESCO",
    "“Es la capacidad para identificar, producir, tratar, transformar, difundir y utilizar la información con vistas a crear y aplicar los conocimientos necesarios para el desarrollo humano” ",
    "Hacia las sociedades del conocimiento"
  ),
];

export default function TableScon() {
  return (
    <>
      <ResponsiveDrawer />
      <Stack alignItems={"center"}>
        <Stack mt={"50px"} width={"100%"}>
          <TableContainer sx={{ borderRadius: "15px" }} component={Paper}>
            <Typography
              variant="h4"
              mb={1}
              textAlign={"center"}
              sx={{
                textDecoration: "underline",
                textDecorationColor: "#A970FF",
              }}
            >
              Sociedad del Conocimiento
            </Typography>
            <Table
              sx={{ minWidth: 650, boxShadow: 5 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <span>
                      <u>
                        <b> Decada</b>
                      </u>
                    </span>
                  </TableCell>
                  <TableCell align="center">
                    <span>
                      <u>
                        <b> Autor</b>
                      </u>
                    </span>
                  </TableCell>
                  <TableCell align="center">
                    <span>
                      <u>
                        <b>Concepto</b>
                      </u>
                    </span>
                  </TableCell>
                  <TableCell align="center">
                    <span>
                      <u>
                        <b>Libro</b>
                      </u>
                    </span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      sx={{ textAlign: "center" }}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell align="center">{row.calories}</TableCell>
                    <TableCell align="center">{row.fat}</TableCell>
                    <TableCell align="center">{row.carbs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Stack>
      </Stack>
    </>
  );
}
