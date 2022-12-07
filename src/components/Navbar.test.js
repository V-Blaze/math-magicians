import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('testing the Navbar', () => {
  it('testing the title inside the Navbar ', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const h1Element = screen.getByText(/Math Magicians/i);
    expect(h1Element).toBeInTheDocument();
  });
  it('testing the Link Home inside the Navbar ', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const buttonNumberElement = screen.getByText(/Home/i);
    expect(buttonNumberElement).toBeInTheDocument();
  });
});
