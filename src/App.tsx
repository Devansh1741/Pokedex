import React, { useEffect } from 'react';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Background from './components/Background';
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { ToastContainer, ToastOptions, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Search from "./pages/Search"
import './scss/index.scss'
import MyList from './pages/MyList';
import Pokemon from './pages/Pokemon';
import Compare from './pages/Compare';
import About from './pages/About';
import { useAppSelector } from './app/hooks';
import { useDispatch } from 'react-redux';
import { clearToasts } from './app/slices/AppSlice';

function App() {
  const {toasts} = useAppSelector(({app}) => app);
  const dispatch = useDispatch();

  useEffect(() => {
    const toastOptions: ToastOptions = {
      position: "bottom-right",
      autoClose: 2000,
      pauseOnHover: true,
      draggable: true,
      theme: 'dark',
    }
    if(toasts.length){
      toasts.forEach((message: string) => {
        toast(message, toastOptions);
      });
      dispatch(clearToasts());
    }
  }, [toasts, dispatch])

  return (
    <div className='main-container'>
      <Background />
      <Router>
        <div className="app">
          <Navbar/>
          <Routes>
            <Route element={<Search/>} path='/search'/>
            <Route element={<MyList/>} path='/list'/>
            <Route element={<Pokemon/>} path='/pokemon/:id'/>
            <Route element={<Compare/>} path='/compare'/>
            <Route element={<About />} path='/about'/>
            <Route element={<Navigate to={"/pokemon/1"} />} path='*' />
          </Routes>
          <Footer/>
          <ToastContainer />
        </div>
      </Router>
    </div>
  );
}

export default App;
