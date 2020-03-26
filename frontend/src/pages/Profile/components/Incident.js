import React from "react";
import { FiTrash2 } from "react-icons/fi";
import swal from "sweetalert";

import api from "../../../services/api";

function Incident({ incident, ongId, setIncidents, data }) {
  async function handleDeleteIncident(id) {
    try {
      await api.delete(`incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });
      //   swal("Caso deletado com sucesso", "", "success");
      window.location.reload(false);
    } catch (err) {
      swal("Erro ao deletar caso", err, "error");
    }
  }

  return (
    <li>
      <strong>CASO</strong>
      <p>{incident.title}</p>

      <strong>DESCRIÇÃO</strong>
      <p>{incident.description}</p>

      <strong>VALOR:</strong>
      <p>
        {Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL"
        }).format(incident.value)}
      </p>

      <button type="button" onClick={() => handleDeleteIncident(incident.id)}>
        <FiTrash2 size={20} color="#a8a8b3" />
      </button>
    </li>
  );
}

export default Incident;
