import React from 'react';

import { useNavigate } from 'react-router-dom';
import TableTag from './TableTag';

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
        <div className="tag-container">
          {candidate?.tags.slice(0, 2).map(t => <TableTag key={t.id} name={t.name} />)}

          {candidate?.tags.length > 2 ?
            <TableTag title={candidate?.tags.slice(2).map(t => t.name).join(', ')} name={`+${candidate.tags.length - 2}`} /> :
            null}
        </div>
      </td>
    </tr>
  );
};

export default CandidateRow;
