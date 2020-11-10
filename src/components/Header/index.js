import React from "react";
import { Container } from "@material-ui/core";
import { useTheme } from "@material-ui/styles";

const Header = params => {
  const theme = useTheme();
  const { render } = params;
  return (
    <Container
      style={{
        backgroundColor: "#F2F2F3",
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
      }}
    >
      {render}
    </Container>
  );
};

export default Header;
