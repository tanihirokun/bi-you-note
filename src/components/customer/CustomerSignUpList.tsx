import React, { memo, VFC } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid, TextField } from "@mui/material";
import { CustomerSignUpInput } from "./CustomerSignUpInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export const CustomerSignUpList: VFC = memo(() => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Grid container spacing={3} component="form">
      <CustomerSignUpInput
        id={"lastName"}
        label={"苗字"}
        autoComplete={"given-name"}
        size={6}
      />
      <CustomerSignUpInput
        id={"firstName"}
        label={"名前"}
        autoComplete={"family-name"}
        size={6}
      />
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">性別</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="女性" />
            <FormControlLabel value="male" control={<Radio />} label="男性" />
            <FormControlLabel
              value="other"
              control={<Radio />}
              label="その他"
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="age-select">年齢</InputLabel>
          <Select
            labelId="age-select"
            id="age-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>10代</MenuItem>
            <MenuItem value={20}>20代</MenuItem>
            <MenuItem value={30}>30代</MenuItem>
            <MenuItem value={40}>40代</MenuItem>
            <MenuItem value={50}>50代</MenuItem>
            <MenuItem value={60}>60代</MenuItem>
            <MenuItem value={70}>70代</MenuItem>
            <MenuItem value={80}>80代</MenuItem>
            <MenuItem value={90}>90代以上</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <CustomerSignUpInput
        id={"address1"}
        label={"住所"}
        autoComplete={"address-line1"}
      />
      <Grid item xs={12}>
      <TextField
        fullWidth
        multiline
        label={'その他'}
        rows={5}
        sx={{mt: 3, mb: 4}}
      />
      </Grid>
    </Grid>
  );
});
