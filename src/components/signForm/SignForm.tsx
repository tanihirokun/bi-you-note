import React, { useEffect, useState, VFC } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { pink } from "@mui/material/colors";
import { auth, provider } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

type AuthDataTypes = {
  email: string;
  password: string;
};

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <span>bi-you note</span> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const theme = createTheme();

export const SignForm: VFC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthDataTypes>();

  //サインイン画面かサインアップ画面か切り替えをuseStateで管理
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();

  //ログイン処理
  const ClickSignIn = async (data: AuthDataTypes) => {
    const { email, password } = data;
    try {
      //書き方が変わったので注意
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };
  //新規登録
  const ClickSignUp = async (data: AuthDataTypes) => {
    const { email, password } = data;
    try {
      //書き方が変わったので注意
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };
  //googoleでログイン
  const ClickGoogleSignIn = async (data: any) => {
    try {
      //書き方が変わったので注意
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user && navigate("/home");
    });
  }, [navigate]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: pink[200] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignIn ? "ログイン" : "新規登録"}
          </Typography>
          <Box
            component="form"
            onSubmit={
              isSignIn ? handleSubmit(ClickSignIn) : handleSubmit(ClickSignUp)
            }
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              autoFocus
              error={Boolean(errors.email)}
              helperText={errors.email && errors.email.message}
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "正しい形式でアドレスを入力したください",
                },
              })}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              error={Boolean(errors.password)}
              helperText={errors.password && errors.password.message}
              {...register("password", {
                required: true,
                minLength: {
                  value: 6,
                  message: "パスワードを６文字以上で入力してください",
                },
              })}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                py: 2,
                fontSize: 15,
                fontWeight: "Bold",
                background: pink[200],
                "&:hover": {
                  background: pink[100],
                },
              }}
            >
              {isSignIn ? "ログインする" : "新規登録する"}
            </Button>
            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 1,
                mb: 3,
                p: 1,
                fontSize: 15,
                fontWeight: "Bold",
                background: pink[200],
                "&:hover": {
                  background: pink[100],
                },
              }}
              onClick={ClickGoogleSignIn}
            >
              sign in with Google
            </Button>
            <Grid container>
              <Grid item lg>
                <Link href="#" variant="body2">
                  パスワードを忘れた方はこちら
                </Link>
              </Grid>
              <Grid item>
                <Link
                  href="#"
                  variant="body2"
                  onClick={() => setIsSignIn(!isSignIn)}
                >
                  {isSignIn
                    ? "アカウントをお持ちでない方はこちら"
                    : "アカウントをお持ちの方はこちら"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
};
