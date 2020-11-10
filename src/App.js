import React from "react";
import Routes from "~/routes";
import { Container } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "~/assets/css/global.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3F2787"
    },
    purple: {
      20: "#DFD5FF",
      100: "#6045AF",
      800: "#1D1647"
    },
    grey: {
      300: "#72737A",
      500: "#454550",
      700: "#2B2B2B",
      800: "#070817",
      20: "#F2F2F3"
    },
    text: {
      success: "#65A300"
    }
  }
});

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container classes={{ root: "p-0" }} maxWidth="xs">
          <Routes />
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
