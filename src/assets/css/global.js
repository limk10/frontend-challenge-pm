import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  
  :root {
    --white-color: #FFFF;

    --green-100-color: #65A300;

    --purple-800-color: #1D1647;
    --purple-200-color: #3F2787;
    --purple-100-color: #6045AF;
    
    --gray-800-color: #070817;
    --gray-500-color: #454550;
    --gray-700-color: #2B2B2B;
    --gray-300-color: #72737A;
    --gray-20-color: #F2F2F3;
  }

  * {
    font-family: "Lato", sans-serif !important;
  }

  html, body {
    background: #F0F0F0;
  }

`;
