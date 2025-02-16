import React, { useState } from 'react';
import './Inicial.css';
import logo1 from '../../img/LogoFarmaFacil.png';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Inicial = () => {
  const [isCliente, setIsCliente] = useState(true); // Estado para alternar entre cliente e fornecedor

  const handleFornec = () => {
    setIsCliente(false); // Mostrar o modo fornecedor
  };

  const handleCli = () => {
    setIsCliente(true); // Mostrar o modo cliente
  };

  return (
    <div>
      <Helmet>
        <title>FarmaFácil</title>
      </Helmet>
      <main>
        {isCliente ? (
          <div className="init-cliente">
            <div className="div-top">
              <img src={logo1} alt="Logo do FarmaApp" className='logoInicial' />
              <h1>Olá, seja bem-vindo(a)!</h1>
              <p>Você possui cadastro em nosso App?</p>
              <Link to={'/login'}><button type='button' className='btn-inicial' id='btn-login'>Sim, sou cadastrado(a)</button></Link>
              <span>Ou</span>
              <Link to={'/register'}><button type='button' className='btn-inicial' id='btn-register'>Não, quero me cadastrar</button></Link>
            </div>
            <p className='alternate' id='alter-fornec' onClick={handleFornec}>Sou Fornecedor</p>
          </div>
        ) : (
          <div className="init-empresa">
            <div className="div-top">
              <img src={logo1} alt="Logo do FarmaApp" className='logoInicial' />
              <h1>Olá, Fornecedor! Seja bem-vindo(a)!</h1>
              <p>Você possui cadastro em nosso App?</p>
              <Link to={'/loginfornecedor'}><button type='button' className='btn-inicial' id='btn-login'>Sim, sou cadastrado(a)</button></Link>
              <span>Ou</span>
              <Link to={'/registerfornecedor'}><button type='button' className='btn-inicial' id='btn-register'>Não, quero me cadastrar</button></Link>
            </div>
            <p className='alternate' id='alter-cli' onClick={handleCli}>Sou Cliente</p>
          </div>
        )}
      </main>
    </div>
  );
};
