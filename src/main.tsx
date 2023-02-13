import React from 'react';
import ReactDOM from 'react-dom/client';
import RouterProvider from '@/router/RouterProvider';
import '@/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider />
  </React.StrictMode>
);
