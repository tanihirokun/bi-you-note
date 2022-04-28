import React, { memo, VFC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

import { Header } from "../header/Header";
import { UserListCard } from "./UserListCard";
import { Footer } from "../footer/Footer";

export const UserList: VFC = memo(() => {

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <CssBaseline />
      <Header />
      <Container maxWidth={"sm"} sx={{ width: "100%", marginTop: {xs: 5, md: 10} ,marginBottom: {xs: 5, md: 10} }}>
        <Grid container spacing={3}>
          <UserListCard/>
          <UserListCard/>
          <UserListCard/>
          <UserListCard/>
          <UserListCard/>
          <UserListCard/>
        </Grid>
      </Container>
      <Footer/>
    </Box>
  );
});
