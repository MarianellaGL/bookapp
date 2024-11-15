import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import "./style.css";
import { Divider, Drawer, List } from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import { ListMenu } from "../ListMenu/ListMenu";
import { AppBarMenu } from "../AppBarMenu/AppBarMenu";

export default function ButtonAppBar({ children }) {
  const [open, setOpen] = useState(true);

  const menu = [
    {
      id: 1,
      titulo: "Buscá un libro",
      path: "",
      icon: <StarIcon />,
    },
    {
      id: 2,
      titulo: "Agregá un libro",
      path: "",
      icon: <StarIcon />,
    },
    {
      id: 3,
      titulo: "listado libros",
      path: "",
      icon: <StarIcon />,
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/**Esta parte de acá es el appbar, la barrita azul */}
      <AppBarMenu setOpen={setOpen} />
      {/** esto es el drawer con los otros elementos del menu */}
      <Drawer
        variant="temporary"
        sx={{
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { boxSizing: "border-box" },
        }}
        open={open}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <Divider />

          <List>
            {menu.map(({ id, titulo, path, icon }) => (
              <ListMenu key={id} titulo={titulo} path={path} icon={icon} />
            ))}
          </List>
        </Box>
      </Drawer>
      {children}
    </Box>
  );
}
