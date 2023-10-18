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
              <ListItemText> ¿Que es Sociedad?</ListItemText>
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
              <ListItemText>¿Que es Calidad de Vida?</ListItemText>
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
              <ListItemText>¿Que es Conocimiento?</ListItemText>
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
              <ListItemText>¿Que es informacion?</ListItemText>
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
                  Tecnologia de <br /> Informacion <br /> y Conomiento
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
              <ListItemText>Globalizacion economica</ListItemText>
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
              <ListItemText>Pais Sub-desarrollado</ListItemText>
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
                Sociedad de <br /> la Informacicon
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
                Sociedad del <br /> Conocimiento
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
                  Características de <br /> la sociedad <br /> del conocimiento{" "}
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
                  importancia de <br /> la sociedad de <br /> información
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
                  importancia de <br /> la sociedad de <br /> conocimiento
                </Typography>
              </ListItemText>
            </MenuItem>
          </a>
        </MenuList>
      </Paper>
    </>
  );
}
