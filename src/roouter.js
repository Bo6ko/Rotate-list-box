import React from 'react';
// react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// pages
import Home from './pages/home/Home';
import Error from './pages/Error';
// Header
import Header from './components/Header';
const ReactRouterSetup = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  )
};

export default ReactRouterSetup;
