// index.js

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom'; // Updated import
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = createRoot(document.getElementById('root')); // Updated usage

root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);

reportWebVitals();
