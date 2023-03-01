import { render, screen } from '@testing-library/react';
import App from './App';

// Add tests

test('Render app div', () => {
  render(<App />);
  // const element = document.querySelector('.App');
  const element = screen.getByTestId('app');
  expect(element).toBeInTheDocument();
});
