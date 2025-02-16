import React from 'react';
import { Route, BrowserRouter, Routes, Navigate, Outlet } from "react-router-dom";
import ProtectedRoute from './ProtectedRoute';

import { Inicial } from '../pages/Inicial/Inicial';
import { LoginCliente } from '../pages/UsuarioCliente/LoginCliente/LoginCliente'
import { RegisterCliente } from '../pages/UsuarioCliente/RegisterCliente/RegisterCliente';
import { HomeCliente } from '../pages/UsuarioCliente/HomeCliente/HomeCliente';


export const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes> {/* Certifique-se de usar <Routes> */}
        <Route path="/inicial" element={<Inicial />} />
        <Route path="/login" element={<LoginCliente />} />
        <Route path="/register" element={<RegisterCliente />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/cliente/home" element={<HomeCliente />} />
        </Route>
        {/* <Route path="/loginfornecedor" element={<LoginFornecedor />} />
        <Route path="/registerfornecedor" element={<RegisterFornecedor />} /> */}
      </Routes>
    </BrowserRouter>
  );
};
