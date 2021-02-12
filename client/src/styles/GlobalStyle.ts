import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
  }
  body {
    font-family: 'Roboto', sans-serif;
  }
  html, body, #app{
    width: 100%;
    height: 100%;
    scroll-behavior: smooth;
  }
  a {
    text-decoration:none;
    color: inherit;
  }
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
    line-height: 1;
  }
`;
