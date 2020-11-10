import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');
  
  * {
    font-family: "Lato", sans-serif !important;
    padding:0;
    margin:0;
    vertical-align:baseline;
    list-style:none;
    border:0
  }

  .Toastify__toast-body {
    white-space: pre-line;
  }

  .p-0 {
    padding: 0;
  }

  .p-1 {
    padding: 1rem;
  }
  
  .p-2 {
    padding: 2rem;
  }

  .p-3 {
    padding: 3rem;
  }

  .p-4 {
    padding: 4rem;
  }

  .p-b-0 {
    padding-bottom: 0;
  }

  .p-b-1 {
    padding-bottom: 1rem;
  }
  
  .p-b-2 {
    padding-bottom: 2rem;
  }

  .p-b-3 {
    padding-bottom: 3rem;
  }

  .p-b-4 {
    padding-bottom: 4rem;
  }

  .p-t-0 {
    padding-top: 0;
  }

  .p-t-1 {
    padding-top: 1rem;
  }
  
  .p-t-2 {
    padding-top: 2rem;
  }

  .p-t-3 {
    padding-top: 3rem;
  }

  .p-t-4 {
    padding-top: 4rem;
  }

  /* html, body {
    background: #F2F2F3;
  } */

`;
