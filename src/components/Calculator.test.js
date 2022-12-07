import { render, screen } from '@testing-library/react';
import Calculator from './Calculator';

describe('testing the calculator', () => {
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
