import React from 'react';
import { BiX } from 'react-icons/bi';


const DeletableTag = ({ name }) => {
  return (
    <span className="tag">{name}<BiX className="tag__icon" size="18px" /></span>
  );
};

export default DeletableTag;
