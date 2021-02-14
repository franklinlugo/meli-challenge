import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, theme, GlobalStyle } from 'styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import App from './App';

const queryClient = new QueryClient();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Router>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <App />
      </QueryClientProvider>
    </Router>
  </ThemeProvider>,
  document.getElementById('app'),
);
