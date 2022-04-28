import React, { VFC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import pink from "@mui/material/colors/pink";

import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useMediaQuery } from "@mui/material";

import styles from "./Header.module.css";

export const Header: VFC = () => {
  const navigate = useNavigate();
  const rsWidht = useMediaQuery("(min-width:800px)");

  const clickSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <Box sx={{ alignItems: "center" }}>
      <AppBar position="static" sx={{ bgcolor: pink[100], boxShadow: "none" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
          >
            <MenuIcon
              sx={{ ...(rsWidht ? { display: "none" } : { display: "block" }) }}
            />
          </IconButton>
          <Typography
            variant="h2"
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: "large",
              fontWeight: "bold",
            }}
            className={styles.title}
          >
            bi-you note
          </Typography>
          <Button
            onClick={clickSignOut}
            color="inherit"
            sx={{ fontWeight: "600" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
