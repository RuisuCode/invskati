import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { MenuList, MenuItem } from "@mui/material";

const drawerWidth = 200;

interface Props {
  window?: () => Window;
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
}

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <MenuList sx={{ textAlign: "center", color: "#fff" }}>
          <Typography variant="h6"> Indice</Typography>
          <a
            href="#soci"
            style={{
              textDecoration: "none",
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemText>
                <Typography fontSize={"11px"}>Pais Sub-desarrollado</Typography>
              </ListItemText>
            </MenuItem>
          </a>
          <a
            href="#sinfo"
            style={{
              textDecoration: "none",
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
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
              color: "#fff",
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
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          bgcolor: "#A970FF",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{
            ml: "1px",
            mr: "90%",
            display: { sm: "none" },
            borderRadius: "13px",
          }}
        >
          <MenuIcon />
        </IconButton>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          scrollbarWidth: "none",
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#A970FF",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              bgcolor: "#A970FF",
              overflowY: "hidden",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
