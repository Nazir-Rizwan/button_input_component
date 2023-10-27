import './App.css';
import React,{useState,useEffect} from 'react';
import Sidebar from './Components/Sidebar';
import Buttons from './Components/Buttons/Main_Buttons';
import Main_input from './Components/inputs/Main_input';
import { Route, Routes } from 'react-router-dom';


function App() {
 
  return (
    <div className="App">
  <Sidebar/>

  <Routes>
  <Route exact path='/' element={<Main_input/> }/>
  <Route exact path='/button' element={<Buttons/> }/>


  </Routes>

  
    
    </div>
  );
}

export default App;
