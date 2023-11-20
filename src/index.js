import React from 'react';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material';
import ReactDOM from 'react-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const theme =createTheme();
root.render(

<React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

