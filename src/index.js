import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';

import './index.css';

import { getRandomHexColor } from 'helpers';
import { theme } from 'constants/theme';
import { App } from 'components/App/App';

console.log(getRandomHexColor);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
