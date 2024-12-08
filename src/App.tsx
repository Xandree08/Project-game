import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Updates from "./components/Updates/Updates";
import Footer from "./components/Footer/Footer";
import GamePage from "./pages/GamePage/GamePage";
import {Route, Router, Routes, createBrowserRouter, Outlet} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
       <Outlet/>
    </div>
  );
}

export default App;
