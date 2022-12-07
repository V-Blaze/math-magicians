import { render, screen } from '@testing-library/react';
import Home from './Home';

it('testing the heading inside home component', () => {
  render(<Home />);
  const heading = screen.getByText(/Math magicians is a website for all fans of mathematics./i);
  expect(heading).toBeInTheDocument();
});
