import { memo, VFC} from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";


import styles from "./CustomerSignUp.module.css";
import { Container, Typography } from "@mui/material";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import { CustomerSignUpList } from "./CustomerSignUpList";
import { grey, } from "@mui/material/colors";



export const CustomerSignUp: VFC = memo(() => {
  // const minWidth: boolean = useMediaQuery("(min-width:577px)");

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

        </Card>
      </Container>
      <Footer />
    </div>
  );
});
