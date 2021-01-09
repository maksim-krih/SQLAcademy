import {
  makeStyles,
  Button as MUButton,
  ButtonProps
} from "@material-ui/core";
import React, { FC } from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#3D5AFE",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#1C31A5",
    }
  },
});

interface IProps extends ButtonProps {

}

const Button: FC<IProps> = (props) => {
  const classes = useStyles();

  return (
    <MUButton
      {...props}
      classes={{ root: classes.root }}
    />
  );
}

export default Button;
