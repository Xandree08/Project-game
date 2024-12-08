import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GamePage from "./pages/GamePage/GamePage";
import Updates from "./components/Updates/Updates";
import HomePage from "./pages/HomePage/HomePage";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>, // Página inicial
            },
            {
                path: "/play-now",
                element: <GamePage/>, // Página do jogo
            },
        ],
    },
]);
root.render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
);

reportWebVitals();
