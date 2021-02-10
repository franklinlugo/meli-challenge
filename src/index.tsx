import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, theme, GlobalStyle } from 'styles';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,

  document.getElementById('app'),
);
