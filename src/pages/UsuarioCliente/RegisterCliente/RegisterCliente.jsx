import React, { useState } from "react";
import HeaderInit from "../../../components/HeaderInit/HeaderInit";
import "./RegisterCliente.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";

export const RegisterCliente = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmaSenha, setConfirm] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Regex para senha forte
  const senhaForteRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

  const handleSenhaChange = (e) => {
    const novaSenha = e.target.value;
    setSenha(novaSenha);

    // Limpa o erro ao digitar uma senha válida
    if (senhaForteRegex.test(novaSenha)) {
      setError("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!senhaForteRegex.test(senha)) {
      setError(
        "A senha deve ter pelo menos 8 caracteres, incluindo uma maiúscula, uma minúscula, um número e um caractere especial."
      );
      return;
    }

    if (senha !== confirmaSenha) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      await axios.post(`${process.env.REACT_APP_API_LINK}/auth/register`, {
        nome,
        email,
        senha,
        confirmaSenha,
      });

      navigate("/cliente/home");
    } catch (error) {
      setError(error.response?.data?.msg || "Erro ao cadastrar usuário.");
    }
  };

  return (
    <div className="container-register-cliente">
      <Helmet>
        <title>Cadastre-se no App</title>
      </Helmet>
      <HeaderInit />

      <main>
        <div className="container-form">
          <form onSubmit={handleRegister}>
            <div className="div-ipts">
              <label htmlFor="nome-completo">Insira seu nome completo</label>
              <input
                type="text"
                id="nome-completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>

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
                onChange={handleSenhaChange}
              />
            </div>

            <div className="div-ipts">
              <label htmlFor="confirm-senha">Confirme a senha</label>
              <input
                type="password"
                id="confirm-senha"
                value={confirmaSenha}
                onChange={(e) => setConfirm(e.target.value)}
              />
            </div>

            <div className="chkbox-div">
              <input type="checkbox" id="stay-conect" />
              <label htmlFor="stay-conect" className="stay-conect-label">
                Mantenha-me conectado
              </label>
            </div>

            {error && <p className="error-msg">{error}</p>}

            <button type="submit" className="primary-btn" id="btn-cadastrar">
              Cadastrar
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};
