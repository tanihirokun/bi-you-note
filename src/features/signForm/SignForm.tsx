import React, { useState, VFC } from "react";
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
import { Flex } from "@chakra-ui/react";

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
      <span>
        bi-you note
      </span>{" "}
      {new Date().getFullYear()}
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
  } = useForm();

  //サインイン画面かサインアップ画面か切り替えをuseStateで管理
  const [isSignIn, setIsSignIn] = useState(true);

  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

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
            //  onSubmit={}
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
                p: 2,
                fontSize: 15,
                fontWeight: 'Bold',
                background: pink[200],
                "&:hover": {
                  background: pink[100],
                },
              }}
            >
              {isSignIn ? "ログインする" : "新規登録する"}
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
