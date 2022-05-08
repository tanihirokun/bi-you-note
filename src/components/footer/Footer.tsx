import React, { VFC } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { pink } from "@mui/material/colors";

export const Footer: VFC = () => {
  function Copyright() {
    return (
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ textAlign: "center" }}
      >
        {"Copyright © "}
        <span>bi-you note</span> {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        bgcolor: pink[50],
      }}
    >
      <Container maxWidth="sm">
        <Copyright />
      </Container>
    </Box>
  );
};
