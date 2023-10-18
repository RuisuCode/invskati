import {
  Paper,
  MenuList,
  MenuItem,
  ListItemText,
  Typography,
} from "@mui/material";

export default function TableContent() {
  return (
    <>
      <Paper
        sx={{
          width: 200,
          height: "auto",
          maxWidth: "100%",
          position: "fixed",
          borderRadius: "13px",
          left: "2px",
          top: "0",
          background: "transparent",
          boxShadow: 0,
        }}
      >
        <MenuList sx={{ textAlign: "center" }}>
          <Typography variant="h6"> Indice</Typography>
          <a
            href="#investigacion"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>¿Que es Sociedad?</Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#calv"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>
                  ¿Que es Calidad de Vida?
                </Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#cono"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>¿Que es Conocimiento?</Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#info"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>¿Que es informacion?</Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#tic"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>
                  Tecnologia de <br /> Informacion y Conomiento
                </Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#glob"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>
                  Globalizacion economica
                </Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#psub"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>Pais Sub-desarrollado</Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#cscon"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>
                  Sociedad de <br /> la Informacicon
                </Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#scon"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>
                  Sociedad del <br /> Conocimiento
                </Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#cscon"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>
                  Características de <br /> la sociedad del conocimiento{" "}
                </Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#csinf"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>
                  Características de <br /> la sociedad <br />
                  de informacion
                </Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#cglob"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>
                  Características de <br /> la globalización <br />
                  economica
                </Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#isinf"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>
                  importancia de <br /> la sociedad de información
                </Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#iscon"
            style={{
              textDecoration: "none",
              color: "#000",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>
                  importancia de <br /> la sociedad de conocimiento
                </Typography>
              </ListItemText>
            </MenuItem>
          </a>
        </MenuList>
      </Paper>
    </>
  );
}
