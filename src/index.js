import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthContextProvider from './contexts/AuthContext';
import AdminAuthContextProvider from './contexts/AdminAuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <AdminAuthContextProvider>
        <App />
      </AdminAuthContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
