// App.js
import './App.css';
import Home from './components/Home';
import Example from './components/Hooks';
import SignUp from './components/SignUp';
import Login from './components/Login';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/example" element={<Example />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
        <Footer/>
    </>
  );
}

export default App;