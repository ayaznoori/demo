import logo from './logo.svg';
import './App.css';
import Heading from './Heading';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Data from './Data';

function App() {
  
  return (
    <div className="App">
         <Heading  /> 
         <Routes>
            <Route  path='/login' element={<Data/>}  />
            <Route  path='/dashboard' element={<p>dashboard</p>} />
            <Route  path='/student' element={<div>student</div>} />
            <Route  path='/teacher' element={<div>teacher</div>} />
         </Routes>
    </div>
  );
}

export default App;
