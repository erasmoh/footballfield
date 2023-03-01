import { render, screen } from '@testing-library/react';
import App from './App';

// Add tests

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  const element = document.querySelector('.App');
  expect(element).toBeInTheDocument();
});
