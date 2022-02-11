import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router';
import useTags from '../../hooks/useTags';
import useCountries from '../../hooks/useCountries';

import { BiTrash, BiMap, BiFile } from 'react-icons/bi';
import Dropdown from '../container/Dropdown';
import InputText from '../pure/InputText';
import defaultAvatar from '../../assets/default_avatar.png';


import '../../styles/candidate-form.css';
import '../../styles/form.css';
import '../../styles/general.css';
import Button from '../pure/Button';
import FileUploader from '../pure/FileUploader';
import { useAuth } from '../../hooks/useAuth';
import { setCandidateCv, updateCandidate } from '../../api/candidatesAPI';
import { Store } from 'react-notifications-component';

const relocationOptions = [
  { value: true, label: 'Sí' },
  { value: false, label: 'No' },
];

const modalityOptions = [
  { value: 'PRESENTIAL', label: 'En presencial' },
  { value: 'REMOTE', label: 'En remoto' },
  { value: 'MIXED', label: 'Mixto/Híbrido' },
];

const CandidateDetailsPage = () => {
  const history = useLocation();
  const candidate = history.state.candidate;

  const [name, setName] = useState(candidate.name); //String
  const [phone, setPhone] = useState(candidate.phone); //String
  const [email, setEmail] = useState(candidate.email); //String
  const [relocation, setRelocation] = useState(relocationOptions.find(opt => opt.value === candidate.relocation));
  const [modality, setModality] = useState(modalityOptions.find(opt => opt.value === candidate.modality));
  const [cv, setCv] = useState(null); // file pdf
  const [cvUrl, setCvUrl] = useState(candidate.cv_url); // file pdf
  const [isUploading, setIsUploading] = useState(false);

  const { countriesDropdown, cittiesDropdown, setCountryAndCity, selectedCountry, selectedCity } = useCountries();
  const { tagsDropdown, selectedTags } = useTags(candidate);

  useEffect(() => {
    setCountryAndCity(candidate.country, candidate.city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [candidate]);

  const { auth } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    const modifiedCandidate = {
      id: candidate.id,
      name,
      email,
      phone,
      relocation: relocation.value,
      modality: modality.value,
      country: selectedCountry.value.country,
      city: selectedCity.value,
      tags: selectedTags.map(opt => opt.value.id)
    };
    if (cv) {
      setCandidateCv(candidate.id, cv, auth.token)
        .then(res => res.cv_url)
        .then(cv_url => updateCandidate({ ...modifiedCandidate, cv_url }, auth.token))
        .then(updatedCandidate => {
          Store.addNotification({
            message: 'Cambios guardados correctamente',
            type: 'success',
            container: 'bottom-left',
            dismiss: {
              duration: 3000
            }
          });
          setIsUploading(false);
        })
        .catch(() => {
          Store.addNotification({
            message: 'Hubo un error modificando el alumno, intanta de nuevo',
            type: 'danger',
            container: 'bottom-left',
            dismiss: {
              duration: 3000
            }
          });
          setIsUploading(false);
        });
    } else {
      updateCandidate(modifiedCandidate, auth.token)
        .then(updatedCandidate => {
          Store.addNotification({
            message: 'Alumno modificado correctamente',
            type: 'success',
            container: 'bottom-left',
            dismiss: {
              duration: 3000
            }
          });
          setIsUploading(false);
        })
        .catch(() => {
          Store.addNotification({
            message: 'Hubo un error modificando el alumno, intanta de nuevo',
            type: 'danger',
            container: 'bottom-left',
            dismiss: {
              duration: 3000
            }
          });
          setIsUploading(false);
        });
    }

  };
  const onCvSelect = (cv) => {
    if ((cv.size / 1024 / 1024) > 20) {
      setCv(null);
      return;
    }
    setCv(cv);
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      setCvUrl(reader.result);
    }, false);
    reader.readAsDataURL(cv);
  };

  return (
    <div className="candidates-details-wrapper">
      <div className="container candidate-form">
        <div className="candidate-form__header">
          <img className="candidate-form__image" src={candidate.image_url ?? defaultAvatar} alt="candidate" />
          <div className="candidate-form__info">
            <span className="candidate-form__name">{candidate.name}</span>
            <span className="candidate-form__location"><BiMap size="20px" /> {candidate.city} | {candidate.country}</span>
          </div>
        </div>

        <form className="candidate-form__form" onSubmit={handleSubmit}>
          <InputText
            type="text"
            name="name"
            labelText="Nombre y Apellidos"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <div className="double-input">
            <InputText
              type="phone"
              name="phone"
              labelText="Nº Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <InputText
              type="email"
              name="email"
              labelText="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="double-input">
            {countriesDropdown}
            {cittiesDropdown}
          </div>

          <div className="double-input">
            <Dropdown
              title="Traslado"
              isSearchable={false}
              value={relocation}
              options={relocationOptions}
              onChange={(opt) => setRelocation(opt)}
            />
            <Dropdown
              title="Presencialidad"
              isSearchable={false}
              value={modality}
              options={modalityOptions}
              onChange={(opt) => setModality(opt)}
            />
          </div>

          <div className="input-group input-group--file">
            <label className="input-group__label" htmlFor="cv">Documento CV</label>
            <input className="input-group__input" type="file" accept="application/pdf" name="cv" id="cv" />
            <div className="cv-buttons">
              <FileUploader
                onFileSelect={onCvSelect}
                text="Subir de nuevo"
                accept="application/pdf"
              />
              <Button
                text="Borrar"
                icon={<BiTrash size="20px" />}
                variant="white"
                onClick={() => setCv(null)}
              />
            </div>
          </div>
          {tagsDropdown}
          <Button text="Guardar cambios" type="submit" disabled={isUploading} />
        </form>
      </div>
      <div className="candidate-cv">
        {cv ?
          (<iframe src={cvUrl} width="100%" height="100%" title="candidate-cv"></iframe>) :
          <div className="candidate__noCv">No se pudo cargar el CV <BiFile /></div>}
      </div>
    </div>
  );
};

export default CandidateDetailsPage;
