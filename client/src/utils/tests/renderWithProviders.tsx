import * as React from 'react';
import { ThemeProvider, theme } from 'styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react';

const renderWithProviders = (ui: JSX.Element): unknown => {
  const queryClient = new QueryClient();

  const Wrapper: React.FC = ({ children }) => (
    <ThemeProvider theme={theme}>
      <Router>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </Router>
    </ThemeProvider>
  );

  return {
    ...render(ui, { wrapper: Wrapper }),
  };
};

export default renderWithProviders;
