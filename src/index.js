import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Router from './routes/Router';
import reportWebVitals from './reportWebVitals';
import './styles/global.css';

const root = document.getElementById('root');
const rootContainer = createRoot(root);

rootContainer.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);

reportWebVitals();