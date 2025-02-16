import React from 'react'
import './HeaderInit.css'
import Back from '../../img/icons/back.svg'
import { Link, useLocation } from 'react-router-dom';

const HeaderInit = () => {
  const location = useLocation();

    // Define os textos com base na página atual
    let loginText = 'Entrar';
    let registerText = 'Cadastrar';

    if (location.pathname === '/login') {
        loginText = 'Entrar';
        registerText = 'Criar conta';
    } else if (location.pathname === '/register') {
        loginText = 'Cadastrar';
        registerText = 'Entrar na sua Conta';
    }

  return (
    <div className='containerNav'>
    <div className='arrow'><Link to={'/'}><img src={Back} alt="" /></Link></div>
    <h1 className='text'>{loginText}</h1>
    <Link to={'/register'} style={{ textDecoration: 'none' }}>
        <h1 className='text2'>{registerText}</h1>
    </Link>
</div>
  )
}

export default HeaderInit