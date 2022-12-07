import { render, screen } from '@testing-library/react';
import Quote from './Quote';

it('testing the heading inside Quote component', () => {
  render(<Quote />);
  const heading = screen.getByText(/The kids are inspired. They work together, they collaborate and help one another./i);
  expect(heading).toBeInTheDocument();
});
