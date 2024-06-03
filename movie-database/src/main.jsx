import React from 'react';
import ReactDOM from 'react-dom/client';
import { Router } from 'react-router-dom';
import App from './App'; // Ensure this import is correct
import './scss/styles.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename="/neuvie-database"> 
      <App />
    </Router>
  </React.StrictMode>
);