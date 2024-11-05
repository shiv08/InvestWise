import './App.css';
import HomePage from './pages/HomePage';
import React from 'react';
import { HashRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <HomePage />
    </Router>
  );
}

