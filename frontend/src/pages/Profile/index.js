import React, { useEffect, useState } from "react";
import { FiPower } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
import IncidentsContainer from "./components/IncidentsContainer";
import "./styles.css";

import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

function Profile() {
  const [incidents, setIncidents] = useState([]);
  const ongId = localStorage.getItem("ongId");
  const ongName = localStorage.getItem("ongName");
  const history = useHistory();

  useEffect(() => {
    api
      .get("profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => {
        setIncidents(response.data);
      });
  }, [ongId]);
  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }
  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be The Hero" />
        <span> Bem vinda, {ongName} </span>

        <Link className="button" to="/incidents/new">
          Cadastrar Novo Caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={18} color="#E02041"></FiPower>
        </button>
      </header>
      <IncidentsContainer
        data={incidents}
        ongId={ongId}
        setIncidents={setIncidents}
      />
    </div>
  );
}

export default Profile;
