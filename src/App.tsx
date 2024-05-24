import React from 'react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Background from './components/Background';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Search from "./pages/Search"
import './scss/index.scss'
import MyList from './pages/MyList';
import Pokemon from './pages/Pokemon';
import Compare from './pages/Compare';
import About from './pages/About';

function App() {
  return (
    <div className='main-container'>
      <Background />
      <Router>
        <div className="app">
          <Navbar/>
          <Routes>
            <Route element={<Search/>} path='/searcg'/>
            <Route element={<MyList/>} path='/list'/>
            <Route element={<Pokemon/>} path='/pokemon/:id'/>
            <Route element={<Compare/>} path='/compare'/>
            <Route element={<About />} path='/about'/>
            <Route element={<Navigate to={"/pokemon/1"} />} path='*' />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
