import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// stylesheet
import './App.css';
// components
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

// pages
import Home from './pages/Home';
import Quote from './pages/Quote';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="calculator" element={<Calculator />} />
            <Route path="quote" element={<Quote />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
