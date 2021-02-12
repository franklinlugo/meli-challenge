import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, theme, GlobalStyle } from 'styles';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <GlobalStyle />
      <App />
    </Router>
  </ThemeProvider>,

  document.getElementById('app'),
);
