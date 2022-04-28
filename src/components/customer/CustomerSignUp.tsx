import { memo, VFC} from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button, { ButtonProps } from "@mui/material/Button";

import styles from "./CustomerSignUp.module.css";
import { Container, Typography } from "@mui/material";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { CustomerSignUpList } from "./CustomerSignUpList";
import { grey, pink } from "@mui/material/colors";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";


export const CustomerSignUp: VFC = memo(() => {
  // const minWidth: boolean = useMediaQuery("(min-width:577px)");
  const navigate = useNavigate();

  const ColorButton = styled(Button)<ButtonProps>(() => ({
    backgroundColor: pink[100],
    "&:hover": {
      backgroundColor: pink[50],
    },
    "$:action": {
      backgroundColor: pink[100],
    },
  }));

  const clickBackHome = () => {
    navigate("/home");
  };
  return (
    <div className={styles.root}>
      <Header />
      <Container maxWidth={"sm"} className={styles.container}>
        <Card sx={{ width: "100%", margin: "auto" }}>
          <CardContent>
            <Typography align="center" sx={{ fontSize: '20px', fontWeight: 'bold', color: grey[600]}}>
              新規登録
            </Typography>
            <CustomerSignUpList />
          </CardContent>
          <div className={styles.button_wrapper}>
            <ColorButton
              size="medium"
              variant="contained"
              sx={{
                color: "white",
                fontSize: "16px",
                paddingX: 6,
                fontWeight: "bold",
              }}
              onClick={clickBackHome}
            >
              戻る
            </ColorButton>
            <ColorButton
              size="medium"
              variant="contained"
              sx={{
                color: "white",
                fontSize: "16px",
                paddingX: 6,
                fontWeight: "bold",
              }}
            >
              登録
            </ColorButton>
          </div>
        </Card>
      </Container>
      <Footer />
    </div>
  );
});
