import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import Quote from './Quote';

it('snapshots', () => {
  const tree = renderer
    .create(<Quote />).toJSON();
  expect(tree).toMatchSnapshot();
});
it('testing the heading inside Quote component', () => {
  render(<Quote />);
  const heading = screen.getByText(/The kids are inspired. They work together, they collaborate and help one another./i);
  expect(heading).toBeInTheDocument();
});
