import React, { memo, VFC } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";

import { Header } from "../header/Header";
import { UserListCard } from "./UserListCard";
import { Footer } from "../footer/Footer";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { CreateButton } from "../parts/CreateButton";
import { useNavigate } from "react-router-dom";

export const UserList: VFC = memo(() => {
  const users = useSelector(selectUser);
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate("/home");
  };

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
      <Container
        maxWidth={"sm"}
        sx={{
          width: "100%",
          marginTop: { xs: 5, md: 10 },
          marginBottom: { xs: 5, md: 10 },
        }}
      >
        <Grid container spacing={3}>
          {users.map((user) => (
            <UserListCard
              firstName={user.firstName}
              lastName={user.lastName}
              gender={user.gender}
              age={user.age}
            />
          ))}
        </Grid>
      </Container>
      <Container
        maxWidth={"sm"}
        sx={{ width: "100%", marginTop: { xs: 8, md: 7 },marginBottom: 1}}
      >
        <Box textAlign={'center'} >
          <CreateButton variant={"contained"} padding={5} onClick={onClickHome}>
            戻る
          </CreateButton>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
});
