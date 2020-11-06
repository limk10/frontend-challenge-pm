import React from "react";
import Routes from "~/routes";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "~/assets/css/global.js";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
