import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Stack, Typography } from "@mui/material";
import ResponsiveDrawer from "../../shared/components/HeaderAndDrawer";
import Footer from "../../shared/components/footer";

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
        <Stack
          sx={{
            bgcolor: "#A970FF",
            p: 2,
            mt: "50px",
            boxShadow: 5,
            borderRadius: 3,
          }}
          direction={{ xs: "column", sm: "row", md: "row", lg: "row" }}
          spacing={{ xs: 2, sm: 1, md: 4 }}
          alignItems={"center"}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                flex: "1 0 auto",
                p: 1,
              }}
            >
              <Typography
                sx={{ textAlign: "center" }}
                color={"secondary"}
                variant="h3"
              >
                Tabla De Información
              </Typography>
              <Typography
                variant="subtitle1"
                color="secondary"
                textAlign={"center"}
                component="div"
              >
                <u> Tema:</u> Evolucion Historica <br /> <u> Materia:</u>
                Sociedad del Conocimiento
                <br />
                <u> Profa.:</u>Katiuska Nuñez
              </Typography>
            </Box>
            <Box
              sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
            ></Box>
          </Box>
        </Stack>
        <Stack mt={"50px"} width={"98%"}>
          <Typography
            variant="h5"
            fontSize={"28px"}
            mb={1}
            textAlign={"center"}
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#A970FF",
            }}
          >
            Sociedad del Conocimiento
          </Typography>
          <TableContainer
            sx={{ borderRadius: "15px", boxShadow: 5 }}
            component={Paper}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow sx={{ bgcolor: "#C8A8FF" }}>
                  <TableCell
                    align="center"
                    sx={{
                      border: "solid",
                      borderTop: "none",
                      borderLeft: "none",
                      borderColor: "#ECECEC",
                    }}
                  >
                    <span>
                      <u
                        style={{
                          fontSize: "20px",
                          color: "#fff",
                          textDecorationColor: "#fff",
                        }}
                      >
                        <b style={{ fontSize: "20px" }}> Decada</b>
                      </u>
                    </span>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "solid",
                      borderTop: "none",
                      borderLeft: "none",
                      borderColor: "#ECECEC",
                    }}
                  >
                    <span>
                      <u
                        style={{
                          fontSize: "20px",
                          color: "#fff",
                          textDecorationColor: "#fff",
                        }}
                      >
                        <b style={{ fontSize: "20px" }}> Autor</b>
                      </u>
                    </span>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "solid",
                      borderTop: "none",
                      borderLeft: "none",
                      borderColor: "#ECECEC",
                    }}
                  >
                    <span>
                      <u
                        style={{
                          fontSize: "20px",
                          color: "#fff",
                          textDecorationColor: "#fff",
                        }}
                      >
                        <b style={{ fontSize: "20px" }}>Concepto</b>
                      </u>
                    </span>
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      border: "solid",
                      borderTop: "none",
                      borderLeft: "none",
                      borderRight: "none",
                      borderColor: "#ECECEC",
                    }}
                  >
                    <span>
                      <u
                        style={{
                          fontSize: "20px",
                          color: "#fff",
                          textDecorationColor: "#fff",
                        }}
                      >
                        <b style={{ fontSize: "20px" }}>Libro</b>
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
        <Footer />
      </Stack>
    </>
  );
}
