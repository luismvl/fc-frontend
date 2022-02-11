import React from 'react';

import CandidateRow from '../pure/CandidateRow';
import { BiSortAlt2 } from 'react-icons/bi';

import '../../styles/table.css';

const CandidatesTable = ({ candidates, setSortByParams, sortByParam }) => {

  return (
    <div className="container table-wrapper">
      <table className="table" id="table">
        <thead>
          <tr>
            <th>
              <div onClick={() => setSortByParams('name')}
                className={`th-withIcon ${sortByParam === 'name' ? 'selected' : ''}`}>
                Nombre <BiSortAlt2 size="16px" />
              </div>
            </th>
            <th>
              <div onClick={() => setSortByParams('city')}
                className={`th-withIcon ${sortByParam === 'city' ? 'selected' : ''}`}>
                Ciudad <BiSortAlt2 size="16px" />
              </div>
            </th>
            <th>
              <div onClick={() => setSortByParams('country')}
                className={`th-withIcon ${sortByParam === 'country' ? 'selected' : ''}`}>
                País <BiSortAlt2 size="16px" />
              </div>
            </th>
            <th>Teléfono</th>
            <th>
              <div onClick={() => setSortByParams('email')}
                className={`th-withIcon ${sortByParam === 'email' ? 'selected' : ''}`}>
                Correo electrónico <BiSortAlt2 size="16px" />
              </div>
            </th>
            <th>
              <div onClick={() => setSortByParams('tags')}
                className={`th-withIcon ${sortByParam === 'tags' ? 'selected' : ''}`}>
                Etiquetas <BiSortAlt2 size="16px" />
              </div>
            </th>
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
