import React, { useState, useEffect } from 'react';

import Dropdown from '../components/container/Dropdown';
import TagsList from '../components/pure/TagsList';

import { capitalize } from '../utils/capitalize.js';
import { useAuth } from './useAuth';
import { getAllTags } from '../api/tagsAPI';


function useTags(candidate) {
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState(null);
  const [tagsOptions, setTagsOptions] = useState([]);

  const { auth } = useAuth();

  useEffect(() => {
    getAllTags(auth.token)
      .then(res => setTags(res));

  }, [auth.token]);

  useEffect(() => {
    setTagsOptions(tags.map(t => ({ value: t, label: capitalize(t.name) })));
  }, [tags]);

  // Si candidate se pasa como argumento, asigna sus tags como seleccionadas
  useEffect(() => {
    if (candidate) {
      setSelectedTags(tagsOptions.filter(opt => candidate.tags.map(t => t.id).includes(opt.value.id)));
    }
  }, [candidate, tagsOptions]);

  const onChangeTagsSelect = (opt, action) => {
    setSelectedTags(opt);
  };

  const onRemoveTag = (tagName) => {
    setSelectedTags((prev) => prev.filter(tag => tag.value.name !== tagName));
  };

  const clearSelectedTags = () => {
    setSelectedTags(null);
  };

  const tagsDropdown = (
    <Dropdown
      isClearable={false}
      title="Etiquetas"
      isLoading={!tags || tags.length === 0 ? true : false}
      value={selectedTags}
      options={tagsOptions}
      placeholder="Escribe para buscar..."
      hideSelectedOptions={true}
      isMulti={true}
      onChange={onChangeTagsSelect}
    >
      <TagsList tags={selectedTags} onRemoveTag={onRemoveTag} />
    </Dropdown>
  );


  return { tagsDropdown, selectedTags, clearSelectedTags };
}

export default useTags;