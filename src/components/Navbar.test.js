import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

describe('testing the Navbar', () => {
  it('snapshots', () => {
    const tree = renderer
      .create(<Router><Navbar /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
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
