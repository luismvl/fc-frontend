import React from 'react';

import CandidateRow from './CandidateRow';
import { BiSortAlt2 } from 'react-icons/bi';

import '../../styles/table.css';

const CandidatesTable = ({ candidates }) => {

  return (
    <div className="container table-wrapper">
        <table className="table" id="table">
          <thead>
            <tr>
              <th><div className="th-wrapper">Nombre <BiSortAlt2 size="16px" /></div></th>
              <th>Ciudad</th>
              <th><div className="th-wrapper">País <BiSortAlt2 size="16px" /></div></th>
              <th>Teléfono</th>
              <th><div className="th-wrapper">Correo electrónico <BiSortAlt2 size="16px" /></div></th>
              <th><div className="th-wrapper">Etiquetas <BiSortAlt2 size="16px" /></div></th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => <CandidateRow key={candidate.email} candidate={candidate} />)}
          </tbody>
        </table>
    </div>
  );
};

export default CandidatesTable;
