import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Player from './Components/Player';
import { render, waitForDomChange, findByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
test('displays text', () => {
  const { getByTestId } = render(<Player />);
  expect(getByTestId('rapinoe')).toHaveTextContent('go rapinoe:');
})