import React from 'react';

import TextFilter from '../pure/TextFilter';
import { BiPlus } from 'react-icons/bi';

import '../../styles/table.css'

const TableControls = () => {
  return (
    <div className="table-controls">
      <TextFilter />
      <button className="button button--white">
        <BiPlus size="20px" />
        Añadir alumno
      </button>
    </div>
  );
};

export default TableControls;
