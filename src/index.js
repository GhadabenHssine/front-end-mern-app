import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Context/authContext/authContext';
import { UsersContextProvider } from './Context/userContext/usersContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <UsersContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </UsersContextProvider>
  </BrowserRouter>
);


