import React, { memo, VFC } from "react";

import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import ManIcon from "@mui/icons-material/Man";
import GirlIcon from "@mui/icons-material/Girl";
import TransgenderIcon from "@mui/icons-material/Transgender";
import { grey } from "@mui/material/colors";
import { UserListDialog } from "./UserListDialog";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../features/userSlice";

type Props = {
  address1?: string;
  age?: number;
  firstName?: string;
  gender?: string;
  lastName?: string;
};

export const UserListCard: VFC<Props> = memo((props) => {
  const {  age, firstName, gender, lastName} =
    props;
  // const [genderCheck, setGenderCheck] = useState("male");
  const color = { color: grey[600] };

  return (
    <Grid item xs={12} sm={6} sx={{ textAlign: "center" }}>
      <Card sx={{ width: "100%", margin: "auto", padding: { xs: 2, md: 0 } }}>
        <CardContent>
          {/* avatar */}
          {gender === "male" ? (
            <Avatar alt="male">
              <ManIcon />
            </Avatar>
          ) : gender === "felmale" ? (
            <Avatar alt="felmale">
              <GirlIcon />
            </Avatar>
          ) : (
            <Avatar alt="gender">
              <TransgenderIcon />
            </Avatar>
          )}
          <Typography variant="h5" component="h2" sx={{ color: color }}>
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {gender}
          </Typography>
          <Typography variant="body2" sx={{ color: color }}>
            {age}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <UserListDialog />
        </CardActions>
      </Card>
    </Grid>
  );
});
