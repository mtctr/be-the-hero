import React from "react";
import Incident from "./Incident";
import Loader from "react-loader-spinner";
function IncidentsContainer({ data, ongId, setIncidents }) {
  if (!data.incidents) {
    return (
      <Loader
        type="Puff"
        color="#e02041"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
    );
  }
  return (
    <div>
      <h1>Casos Cadastrados</h1>
      <ul>
        {data.incidents.map(incident => (
          <Incident
            data={data}
            incident={incident}
            ongId={ongId}
            key={incident.id}
            setIncidents={setIncidents}
          />
        ))}
      </ul>
    </div>
  );
}

export default IncidentsContainer;
