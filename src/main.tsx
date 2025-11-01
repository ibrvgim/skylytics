import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Toaster } from 'react-hot-toast';
import { UnitsContextProvider } from './contexts/UnitsContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UnitsContextProvider>
      <App />
    </UnitsContextProvider>
    <Toaster
      position='top-center'
      gutter={12}
      containerStyle={{ margin: '8px' }}
      toastOptions={{
        success: {
          duration: 3000,
        },

        error: {
          duration: 5000,
        },

        style: {
          fontSize: '16px',
          maxWidth: '500px',
          padding: '16px 34px',
          backgroundColor: 'oklch(37.2% 0.044 257.287)',
          color: '#fff',
          textAlign: 'center',
        },
      }}
    />
  </StrictMode>,
);
