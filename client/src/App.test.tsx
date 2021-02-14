import React from 'react';
import renderWithProviders from 'utils/tests/renderWithProviders';
import App from './App';

// eslint-disable-next-line jest/expect-expect
test('App render', () => {
  renderWithProviders(<App />);
});
