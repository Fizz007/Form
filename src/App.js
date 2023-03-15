import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Userauth from "./components/Userauth";
import css from './App.css'

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Userauth>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Userauth>
      </BrowserRouter>
    </div>
  );
}
