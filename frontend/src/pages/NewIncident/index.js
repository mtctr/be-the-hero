import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";
import swal from "sweetalert";

import logoImg from "../../assets/logo.svg";
function NewIncicent() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState(0);
  const history = useHistory();
  const ongId = localStorage.getItem("ongId");
  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };
    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/profile");
    } catch (err) {
      swal("Erro no cadastro do usuário", err, "error");
    }
  }
  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero"></img>
          <h1> Cadastrar Novo Caso </h1>
          <p>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Titulo do Caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descricao"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewIncicent;
