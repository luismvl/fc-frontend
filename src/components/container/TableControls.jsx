import React from 'react';

import TextFilter from '../pure/TextFilter';
import { BiPlus } from 'react-icons/bi';

import '../../styles/table.css';
import Button from '../pure/Button';

const TableControls = ({ openModal, closeModal, onChangeTextFilter }) => {
  return (
    <div className="table-controls">
      <TextFilter onChangeTextFilter={onChangeTextFilter} />
      <Button
        icon={<BiPlus size="20px" />}
        variant="white"
        onClick={openModal}
        text="Añadir alumno"
      />
    </div>
  );
};

export default TableControls;
