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
import { MenuList, MenuItem, ListItemIcon, Button, Stack } from "@mui/material";
import {
  Bookmarks,
  ArrowRight,
  Api,
  TableChart,
  Home,
  ChevronRight,
} from "@mui/icons-material";
import Modal from "@mui/material/Modal";
import { NavLink } from "react-router-dom";

const drawerWidth = 200;

interface Props {
  window?: () => Window;
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #A970FF",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  display: "flex",
  justifyContent: "center",
};

/* function ModalApps() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  return (
   
  );
}
 */

export default function ResponsiveDrawer(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        <MenuList sx={{ textAlign: "center", color: "#fff" }}>
          <ListItemIcon
            sx={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Bookmarks
              sx={{ mr: 1, ml: 1 }}
              fontSize="small"
              color="secondary"
            />
            <Typography mr={1} variant="h6" color={"#fff"}>
              Indice
            </Typography>
            <Button
              variant="contained"
              startIcon={<Api />}
              onClick={handleOpen}
              sx={{
                backgroundColor: "#fff",
                color: "#A970FF",
                borderRadius: "15px",
              }}
              size="small"
            >
              <Typography variant="inherit" textTransform={"capitalize"}>
                Menu
              </Typography>
            </Button>
          </ListItemIcon>
          <a
            href="#soci"
            style={{
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <MenuItem sx={{ justifyContent: "center" }}>
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    ¿Que es Sociedad?
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    ¿Que es Calidad de Vida?
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    ¿Que es Conocimiento?
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    ¿Que es informacion?
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    Tecnologia de <br /> Informacion y Conomiento
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    Globalizacion economica
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    Pais Sub-desarrollado
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    Sociedad de <br /> la Informacicon
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    Sociedad del <br /> Conocimiento
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    Características de <br /> la sociedad del conocimiento
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    Características de <br /> la sociedad de informacion
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    Características de <br /> la globalización economica
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    importancia de <br /> la sociedad de información
                  </Typography>
                </ListItemText>
              </ListItemIcon>
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
              <ListItemIcon
                sx={{
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ArrowRight fontSize="small" color="secondary" />
                <ListItemText>
                  <Typography fontSize={"11px"} color={"#fff"}>
                    importancia de <br /> la sociedad de conocimiento
                  </Typography>
                </ListItemText>
              </ListItemIcon>
            </MenuItem>
          </a>
        </MenuList>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
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
              height: "45px",
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
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Stack>
              <Stack
                position={"absolute"}
                top={8}
                left={8}
                alignItems={"flex-start"}
              >
                <NavLink to={"/"}>
                  <Button
                    variant="contained"
                    color="info"
                    size="small"
                    sx={{ borderRadius: "15px" }}
                  >
                    <Home />
                  </Button>
                </NavLink>
              </Stack>
              <Stack mt={2}>
                <NavLink to={"/table-scon"}>
                  <Button
                    component="label"
                    variant="contained"
                    color="info"
                    startIcon={<TableChart />}
                  >
                    Tabla
                    <ChevronRight /> Sociedad del Conocimiento
                  </Button>
                </NavLink>
              </Stack>
              <Stack mt={2}>
                <NavLink to={"/table-sinfo"}>
                  <Button
                    component="label"
                    variant="contained"
                    color="info"
                    startIcon={<TableChart />}
                  >
                    Tabla
                    <ChevronRight />
                    Sociedad de la información
                  </Button>
                </NavLink>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      </div>
    </>
  );
}
