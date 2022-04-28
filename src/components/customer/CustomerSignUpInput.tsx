import React, { VFC } from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

type Props = {
  id: string;
  label: string;
  autoComplete: string;
  size?: number;
};

export const CustomerSignUpInput: VFC<Props> = (props) => {
  const { id, label, autoComplete, size } = props;

  return (
    <Grid item xs={12} sm={size}>
      <TextField
        required
        id={id}
        label={label}
        fullWidth
        autoComplete={autoComplete}
        variant="standard"
      />
    </Grid>
  );
};
