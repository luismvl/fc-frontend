import React, { useCallback, useEffect, useState } from 'react';

import CandidatesTable from '../container/CandidatesTable';
import TableControls from '../container/TableControls';
import Filter from '../container/Filter';
import Modal from '../container/Modal';

import '../../styles/general.css';

import { useAuth } from '../../hooks/useAuth';
import { getAllCandidates } from '../../api/candidatesAPI';
import sortCandidatesBy from '../../utils/sortCandidatesBy';



const CandidatesListPage = () => {

  const [showModal, setShowModal] = useState(false);
  const [textFilter, setTextFilter] = useState('');
  const [sortBy, setSortBy] = useState({ param: 'name', asc: true });

  const { auth } = useAuth();
  const initialCandidates = auth?.user?.candidates;
  const [candidates, setCandidates] = useState(initialCandidates);

  const candidatesToShow = sortCandidatesBy(candidates, sortBy).filter(c => c.name.includes(textFilter) || c.email.includes(textFilter));

  useEffect(() => {
    getAllCandidates(auth.token)
      .then(candidates => {
        setCandidates(candidates);
      });
  }, [auth]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onChangeTextFilter = (filter) => {
    setTextFilter(filter);
  };

  const onFilterChange = useCallback((candidates) => {
    setCandidates(candidates);
  }, []);

  const setSortByParams = (param, asc) => {
    setSortBy(prev => ({ param, asc: !prev.asc }));
  };

  const addCreatedCandidate = (candidate) => {
    setCandidates(prev => ([...prev, candidate]))
  }


  return (
    <div className="candidates-list-wrapper">
      <div className="grow-1" >
        <Modal closeModal={closeModal} showModal={showModal} addCreatedCandidate={addCreatedCandidate} />
        <TableControls
          openModal={openModal}
          closeModal={closeModal}
          onChangeTextFilter={onChangeTextFilter} />
        <CandidatesTable candidates={candidatesToShow} setSortByParams={setSortByParams} sortByParam={sortBy.param} />
      </div>
      <Filter onFilterChange={onFilterChange} />
    </div>
  );
};

export default CandidatesListPage;
