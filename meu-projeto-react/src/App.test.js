import { render, screen } from '@testing-library/react';
import Home from './Home/App';

test('renders Badminton Poli-Usp text', () => {
  render(<Home />);
  const textElement = screen.getByText(/Badminton Poli-Usp/i);
  expect(textElement).toBeInTheDocument();
});

test('renders Projeto Marco Zero link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/Projeto Marco Zero/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveAttribute('href', '/MarcoZero');
});
