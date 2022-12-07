import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import Home from './Home';

it('snapshots', () => {
  const tree = renderer
    .create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
it('testing the heading inside home component', () => {
  render(<Home />);
  const heading = screen.getByText(/Math magicians is a website for all fans of mathematics./i);
  expect(heading).toBeInTheDocument();
});
