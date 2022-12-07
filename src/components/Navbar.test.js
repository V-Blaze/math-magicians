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
    const title = screen.getByText(/Math Magicians/i);
    expect(title).toBeInTheDocument();
  });
  it('testing the Link Home inside the Navbar ', () => {
    render(
      <Router>
        <Navbar />
      </Router>,
    );
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeInTheDocument();
  });
});
