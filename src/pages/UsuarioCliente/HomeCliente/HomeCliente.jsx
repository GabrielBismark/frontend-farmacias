import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./HomeCliente.css";
import logoutImg from '../../../img/icons/logout.svg'
import { Helmet } from "react-helmet";

export const HomeCliente = () => {
  const [produtos, setProdutos] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login'); // Redireciona para a página de login se não estiver autenticado
    }
  }, [navigate]);

  // Buscar produtos ao carregar o componente
  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await axios.get("https://backend-farmacias-production.up.railway.app/fornecedor/produto/"); // Atualize com a URL da sua API
        setProdutos(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchProdutos();
  }, []);

  // Manipula a mudança da consulta de pesquisa
  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://backend-farmacias-production.up.railway.app/produtos?search=${searchQuery}`);
      setProdutos(response.data);
    } catch (error) {
      console.error("Erro ao buscar produto:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token'); // Remove o JWT
    window.location.href = '/login'; // Redireciona para login
};


  return (
    <div className="container-home-cliente">
      <Helmet>
        <title>Seja bem-vindo(a)</title>
      </Helmet>
      <div className='header'>
        <h2>Olá, nome</h2>
        <Link onClick={logout}>
          <img src={logoutImg} className="svgIcon" alt="" />
        </Link>
      </div>

      <main>
        <div className="search-box">
          <label htmlFor="">Pesquise um medicamento</label>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="primary-btn" onClick={handleSearch}>
            Buscar Produto
          </button>
        </div>
        <div className="card-container">
          {produtos.length > 0 ? (
            produtos.map((produto) => (
              <div className="card cardCliente" key={produto._id}>
                <div className="half-card">
                  <img
                    src="../../../../public/img/benegrip.png"
                    alt={`Imagem Remédio ${produto.nome}`}
                  />
                  <div className="text-produto">
                    <h3>{produto.nome}</h3>
                    <p>R$ {produto.preco}</p>
                  </div>
                </div>
                <Link to={`/cliente/compra/${produto._id}`} className="primary-btn">
                  Comprar
                </Link>
              </div>
            ))
          ) : (
            <p>Produto não encontrado!</p>
          )}
        </div>
      </main>
    </div>
  );
};