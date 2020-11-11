import React, { useEffect } from "react";
import { Typography } from "@material-ui/core";
import { Container } from "./styles";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/");
    }, 4000);
  }, []);

  return (
    <Container>
      <Typography
        style={{ textAlign: "center", paddingTop: 50 }}
        variant="h5"
        gutterBottom
      >
        Pagina não encontrada :(
      </Typography>
      <Typography
        style={{ textAlign: "center", paddingTop: 50 }}
        variant="h6"
        gutterBottom
      >
        Você será redirecionado para pagina principal em alguns segundos!
      </Typography>
    </Container>
  );
};

export default NotFound;
