import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Application from './app/Application';
import { ThemeProvider } from './app/providers/ThemeProvider';
import './i18n';

createRoot(document.getElementById('app')).render(
  <ThemeProvider>
    <BrowserRouter>
      <Suspense>
        <Application />
      </Suspense>
    </BrowserRouter>
  </ThemeProvider>,
);
