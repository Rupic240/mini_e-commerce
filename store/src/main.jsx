import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import UIStateProvider from './providers/UIStateProvider.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { CssBaseline } from '@mui/material';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UIStateProvider>
      <AuthProvider>
        <CssBaseline />
        <App />
      </AuthProvider>
    </UIStateProvider>
  </StrictMode>,
)
