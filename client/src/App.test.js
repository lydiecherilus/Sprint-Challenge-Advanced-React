import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("world is found", () => {
  const { getByText } = render(<App />);
  getByText(/world/i);
});