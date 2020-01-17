import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


test("response is found", () => {
  const { getByText } = render(<App />);
  getByText(/response/i);
});

test("toggle is found", () => {
  const { getByTextId } = render(<App />);
  getByText(/toggle/i);
});

test("world is found", () => {
  const { getByText } = render(<App />);
  getByText(/world/i);
});




