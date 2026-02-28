import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppLayout from './layouts/appLayout/AppLayout';
import './assets/global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
);
