import React from 'react';
import { BiX } from 'react-icons/bi';


const FilterTag = ({ name, onRemoveTag, ...rest }) => {
  return (
    <span className="tag" {...rest}>
      {name} <BiX className="tag__icon" size="18px" onClick={() => { onRemoveTag(name) }} />
    </span>
  );
};

export default FilterTag;
