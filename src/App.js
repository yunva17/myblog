import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import Main from './pages/main/Main';
import Board from './pages/board/Board';
import PostCreate from './pages/board/PostCreate';

function App() {
  const [currPath, setCurrPath] = useState(window.location.pathname);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} exact />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board/create' element={<PostCreate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
