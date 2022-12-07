import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import Calculator from './Calculator';

describe('testing the calculator', () => {
  it('snapshots', () => {
    const tree = renderer
      .create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('testing the h1 inside the Calculator ', () => {
    render(<Calculator />);
    const h1Element = screen.getByText(/Lets do some math!/i);
    expect(h1Element).toBeInTheDocument();
  });
  it('testing the number (4) inside the Calculator ', () => {
    render(<Calculator />);
    const buttonNumberElement = screen.getByText(/4/i);
    expect(buttonNumberElement).toBeInTheDocument();
  });
  it('testing the (=) inside the Calculator ', () => {
    render(<Calculator />);
    const operatorElement = screen.getByText(/=/i);
    expect(operatorElement).toBeInTheDocument();
  });
});
