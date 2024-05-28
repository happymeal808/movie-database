import React from 'react';
import AppRouter from './routers/AppRouter'; // Ensure this import is correct
import './scss/styles.scss';

const App = () => {
  return (
    <div className="app">
      <AppRouter />
    </div>
  );
};

export default App;