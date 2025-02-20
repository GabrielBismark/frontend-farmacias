import React, { useState } from 'react'
import HeaderInit from "../../../components/HeaderInit/HeaderInit";
import "./LoginCliente.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

export const LoginCliente = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();



    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("https://backend-farmacias-production.up.railway.app/auth/login", {
                email,
                senha,
            });

            // Salvando o token no localStorage
            const { token } = response.data;
            localStorage.setItem("authToken", token);

            navigate("/cliente/home");
        } catch (error) {
            setError(error.response?.data?.msg || "Erro ao logar.");
        }
    };

    console.log(error)
    return (
        <div className='container-login-cliente'>
            <Helmet>
                <title>Entre no App</title>
            </Helmet>

            <HeaderInit />

            <main>
                <div className="div-form">
                    <form onSubmit={handleLogin}>
                        <div className="div-ipts">
                            <label htmlFor="email">Insira seu melhor e-mail</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="div-ipts">
                            <label htmlFor="senha">Crie uma senha</label>
                            <input
                                type="password"
                                id="senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        <button type="submit" className="primary-btn" id="btn-logar">
                            Entrar
                        </button>
                    </form>
                </div>

                <button type="button" className='secondary-btn'>Entrar com SMS</button>
            </main>
        </div>
    )
}
