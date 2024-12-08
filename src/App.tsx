import React from 'react';
import './App.css';
import {HashRouter, Outlet, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage";

function App() {
  return (
      <HashRouter>
          <div className="App">
              <Routes>
                  <Route path="/" index element={<HomePage/>}/>
                  <Route path="/play-now" element={<GamePage/>}/>
              </Routes>
              <Outlet/>
          </div>
      </HashRouter>
  );
}

export default App;
