import React from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Inicial } from "./pages/Inicial/Inicial";
import { RegisterCliente } from "./pages/UsuarioCliente/RegisterCliente/RegisterCliente";
import { HomeCliente } from "./pages/UsuarioCliente/HomeCliente/HomeCliente";
import { LoginCliente } from "./pages/UsuarioCliente/LoginCliente/LoginCliente";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Inicial />
    },
    {
        path: "/login",
        element: <LoginCliente />
    },
    {
        path: "/register",
        element: <RegisterCliente />
    },
    {
        path: "/cliente/home",
        element: <HomeCliente />
    }
    // {
    //     path: "/loginfornecedor",
    //     element: <LoginFornecedor />
    // },
    // {
    //     path: "/registerfornecedor",
    //     element: <RegisterFornecedor />
    // },
    
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)