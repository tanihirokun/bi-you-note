import React, { ReactNode, VFC } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material";

type Props = {
  variant: "outlined" | "contained";
  children: ReactNode;
  padding: number;
  onClick?: any;
}


export const CreateButton: VFC<Props> = (props) => {
  const { variant, children, padding, onClick} = props;
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
    <ColorButton
      size="medium"
      variant={variant}
      sx={{
        color: "white",
        fontSize: "16px",
        paddingX: padding,
        fontWeight: "bold",
      }}
      onClick={onClick}
    >
      {children}
    </ColorButton>
  );
};
