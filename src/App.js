

import './App.scss';
import Home from "./pages/Home/Home.jsx"
import Register from './pages/register/Register';
import Login from './pages/login/Login';

import Watch from './pages/watch/Watch';
import { Route, Routes, Navigate } from "react-router-dom"
import { useContext } from 'react';
import { AuthContext } from "./Context/authContext/authContext"
import Edit from './components/edit/Edit';


import { ToastContainer, toast } from 'react-toastify';

function App() {
  const { user } = useContext(AuthContext)
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />
        <Route path="/" element={user ? <Home /> : <Navigate to="/register" />} />
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />


        {user && (
          <>
            <Route path="/movies" element={<Home type="movie" />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/series" element={<Home type="series" />} />
            <Route path="/watch" element={<Watch />} />
          </>
        )}





      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

    </div>

  );
}

export default App;
