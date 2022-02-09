import React from 'react';
import { useNavigate } from 'react-router-dom';
const CandidateRow = ({ candidate }) => {
  const navigate = useNavigate();
  return (
    <tr onClick={() => navigate(`/candidates/${candidate.id}`, { state: { candidate } })}>
      <td>{candidate.name}</td>
      <td>{candidate.city}</td>
      <td>{candidate.country}</td>
      <td>{candidate.phone}</td>
      <td>{candidate.email}</td>
      <td>
        {/* TODO iterar sobre array de TAGS */}
        <div className="tag-container">
          {/* TODO: Crear compoenente TableTag */}
          <span className="table-tag">HTML&CSS</span>
          <span className="table-tag">ANGULAR</span>
          <span className="table-tag">+4</span>
        </div>
      </td>
    </tr>
  );
};

export default CandidateRow;
