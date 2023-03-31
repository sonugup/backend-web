import React from 'react'
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Register from './Components/Register';
import Login from './Components/Login';
import CreateNote from './Components/CreateNote';
import Notes from './Components/Notes';


const App = () => {
  return (
    <div>
        <h1>Hello Full Stack Web Devlopar</h1>
      <Routes>
        <Route path="/register" element={<Register/>} ></Route>
        <Route path="/login" element={<Login/>} ></Route>
        <Route path="/createNote" element={<CreateNote/>} ></Route>
        <Route path="notes" element={<Notes/>} ></Route>
      </Routes>
    </div>
  )
}

export default App
