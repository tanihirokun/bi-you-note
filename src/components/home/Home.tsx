import React, { memo, VFC } from "react";
import { useNavigate } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { grey  } from "@mui/material/colors";
import { Grid } from "@mui/material";
import { CreateButton } from "../parts/CreateButton";


import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";
import styles from "./Home.module.css";


export const Home:VFC = memo(() => {

const color= {color: grey[600]}
const navigate = useNavigate();

const onClickCostomerSignUp = () => {
  navigate('/costomer-signup')
}
const onClickUserList = () => {
  navigate('/user-list')
}
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      {/* 各ブラウザーの差異を平均化 */}
      <CssBaseline />
      <Header />
      <Container component="main" sx={{ mb: 2 }} maxWidth="sm">
        <img src="top-menu.png" alt="トップ画像" className={styles.image} />
        <Typography variant="h2" component="h2" gutterBottom className={styles.title} sx={{fontWeight: '600', textAlign: 'center', color: color}} >
          bi-you note
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom color={color}>
          {"Pin a footer to the bottom of the viewport."}
          {"The footer will move as the main element of the page grows."}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
        <Grid container spacing={3} >
          <Grid item xs={12} sm={6} sx={{textAlign: 'center'}}>
            <CreateButton variant="contained" padding={4} onClick={onClickCostomerSignUp}>ユーザー登録</CreateButton>
          </Grid>
          <Grid item xs={12} sm={6} sx={{textAlign: 'center'}}>
            <CreateButton variant="contained" padding={4} onClick={onClickUserList}>ユーザー一覧</CreateButton>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
});
