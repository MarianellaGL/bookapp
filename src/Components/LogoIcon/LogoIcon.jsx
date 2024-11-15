import { Box, Typography } from "@mui/material";
import logo from "../../assets/logo.svg";

export const LogoIcon = () => {
  return (
    <Box sx={{ display: "flex", margin: "16px", alignItems: "center" }}>
      <img src={logo} alt="logo" />
      <Typography
        variant="subtitle1"
        component="div"
        sx={{ textAlign: "center", marginLeft: "10px" }}
      >
        App Libros
      </Typography>
    </Box>
  );
};
