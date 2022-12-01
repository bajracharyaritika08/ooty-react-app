import './App.css';
import React from 'react';

import { Routes, Route } from 'react-router-dom';
import { Home } from './screen/home/Home';
import TopToBottom from './components/toptobottom/TopToBottom';
import { ProtectedRoutes } from './components/protectedroutes/ProtectedRoutes';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path='*' element={<ProtectedRoutes/>} />
    </Routes>
    
    </div>
  );
}

export default App;
