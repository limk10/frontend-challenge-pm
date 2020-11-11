import React from "react";

import { Button } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

import { useStyles } from "./styles";

const ActionButton = params => {
  const theme = useTheme();
  const classes = useStyles();
  const {
    title = "",
    color = "primary",
    variant = "contained",
    icon = "",
    onClick = () => {},
    disabled = false
  } = params;

  return (
    <Button
      data-testid="submitTransactionButton"
      type="submit"
      disabled={disabled}
      classes={{ root: classes.button, label: classes.textButton }}
      variant={variant}
      color={color}
      onClick={onClick}
    >
      {icon}
      {icon && <div style={{ marginLeft: theme.spacing(0.8) }} />}
      {title}
    </Button>
  );
};

export default ActionButton;
