import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from 'components/App';

import './index.css';

const refs = {
  window: document.querySelectorAll('.window'),
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
