import React from 'react';

const TableTag = ({ name, title }) => {
  return (
    <span className="table-tag" title={title}>{name}</span>
  );
};

export default TableTag;
