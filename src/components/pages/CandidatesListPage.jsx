import React from 'react';

import CandidatesTable from '../container/CandidatesTable';
import TableControls from '../container/TableControls';
import Filter from '../container/Filter';

import '../../styles/general.css';

const defaultCandidates = [
  {
    "id": 1,
    "name": "Luis Manuel Vela Linares",
    "email": "luis@mail.com",
    "phone": "+58 424 123 4567",
    "country": "Venezuela",
    "city": "Barinas",
    "relocation": true,
    "modality": "MIXED",
    "cv_url": "http://res.cloudinary.com/dspkak5d0/raw/upload/v1643579201/fc-cvs/1-luismanuelvelalinares-cv.pdf",
    "image_url": "http://res.cloudinary.com/dspkak5d0/image/upload/v1643577978/fc-images/1-luismanuelvelalinares-image.jpg",
    "tags": [
      {
        "id": 2,
        "name": "HTML&CSS"
      },
      {
        "id": 1,
        "name": "REACT"
      }
    ]
  }
];

const CandidatesListPage = () => {

  return (
    <div className="candidates-list-wrapper">
      <div className="grow-1" >
        <TableControls />
        <CandidatesTable candidates={defaultCandidates} />
      </div>
      <Filter />
    </div>
  );
};

export default CandidatesListPage;
