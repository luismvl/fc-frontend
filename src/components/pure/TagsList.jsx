import React from 'react';

import FilterTag from '../pure/FilterTag';

import '../../styles/list-filters.css';

const TagsList = ({ tags, onRemoveTag }) => {
  return (
    <div className="tags-list">
      {
        tags?.length > 0 ?
          tags.map(t => <FilterTag key={t.value.id} name={t.value.name} onRemoveTag={onRemoveTag} />) :
          null
      }
    </div>
  );
};

export default TagsList;
