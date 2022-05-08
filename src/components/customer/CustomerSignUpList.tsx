import React, { memo, VFC } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Grid, Input, TextField } from "@mui/material";
import { CustomerSignUpInput } from "./CustomerSignUpInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button, { ButtonProps } from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import { styled } from "@mui/system";
import styles from "./CustomerSignUp.module.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createTask } from "../../features/userSlice";
import { useDispatch } from "react-redux";

type FormInputs = {
  address1?: string;
  age?: number;
  firstName?: string;
  gender?: string;
  lastName?: string;
  text?: string;
};

export const CustomerSignUpList: VFC = memo(() => {
  const [age, setAge] = React.useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const clickBackHome = () => {
    navigate("/home");
  };
  //hook-formの設定
  const { handleSubmit, reset, register} = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    // データが取れていないので修正
    console.log(data)
    dispatch(createTask(data));
    reset();
    navigate("/home");
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const ColorButton = styled(Button)<ButtonProps>(() => ({
    backgroundColor: pink[100],
    "&:hover": {
      backgroundColor: pink[50],
    },
    "$:action": {
      backgroundColor: pink[100],
    },
  }));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid
        container
        spacing={3}
      >
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
        <Input
          type='text'


        />
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="genderLabel">性別</FormLabel>
            <RadioGroup
              row
              aria-labelledby="genderLabel"
              name="genderLabelButton"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="女性"
              />
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
            label={"その他"}
            rows={5}
            sx={{ mt: 3, mb: 4 }}
          />
        </Grid>
      </Grid>
      <div className={styles.button_wrapper}>
        <ColorButton
        type='button'
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
          type="submit"
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
    </form>
  );
});
