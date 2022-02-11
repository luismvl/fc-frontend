import React, { useState } from 'react';

import ReactModal from 'react-modal';

import '../../styles/general.css';
import '../../styles/candidate-form.css';
import '../../styles/modal.css';

import InputText from '../pure/InputText';
import { BiX } from 'react-icons/bi';
import Button from '../pure/Button';
import Dropdown from './Dropdown';

import { Store } from 'react-notifications-component';
import useCountries from '../../hooks/useCountries';
import useTags from '../../hooks/useTags';
import FileUploader from '../pure/FileUploader';
import UploadedFile from '../pure/UploadedFile';
import { useAuth } from '../../hooks/useAuth';
import { createCandidate, setCandidateCv, setCandidateImage } from '../../api/candidatesAPI';

const relocationOptions = [
  { value: true, label: 'Sí' },
  { value: false, label: 'No' },
];

const modalityOptions = [
  { value: 'PRESENTIAL', label: 'En presencial' },
  { value: 'REMOTE', label: 'En remoto' },
  { value: 'MIXED', label: 'Mixto/Híbrido' },
];

ReactModal.setAppElement('#root');


const Modal = ({ closeModal, showModal, addCreatedCandidate, ...rest }) => {

  const [name, setName] = useState(''); //String
  const [phone, setPhone] = useState(''); //String
  const [email, setEmail] = useState(''); //String
  const [relocation, setRelocation] = useState(null); // boolean
  const [modality, setModality] = useState(null); // String
  const [image, setImage] = useState(null); // file image
  const [cv, setCv] = useState(null); // file pdf

  const [isUploading, setIsUploading] = useState(false);

  const { countriesDropdown, cittiesDropdown, clearSelectedCityAndCountry, selectedCountry, selectedCity } = useCountries();
  const { tagsDropdown, selectedTags, clearSelectedTags } = useTags();

  const isFormCompleted =
    !!(name && phone && email && relocation !== null && modality && image && cv && selectedCity &&
      selectedCountry && selectedTags?.length > 0);

  const onImageSelect = (img) => {
    if ((img.size / 1024 / 1024) > 2) {
      setImage(null);
      return;
    }
    setImage(img);
  };

  const onCvSelect = (cv) => {
    if ((cv.size / 1024 / 1024) > 20) {
      setCv(null);
      return;
    }
    setCv(cv);
  };

  const { auth } = useAuth();

  const onSubmit = (e) => {
    e.preventDefault();
    setIsUploading(true);
    const newCandidate = {
      name,
      email,
      phone,
      relocation: relocation.value,
      modality: modality.value,
      country: selectedCountry.value.country,
      city: selectedCity.value,
      tags: selectedTags.map(opt => opt.value.id)
    };
    createCandidate(newCandidate, auth.token)
      .then(candidate => setCandidateCv(candidate.id, cv, auth.token))
      .then(candidate => setCandidateImage(candidate.id, image, auth.token))
      .then(candidate => {
        setName('');
        setEmail('');
        setPhone('');
        setRelocation(null);
        setModality(null);
        clearSelectedCityAndCountry();
        clearSelectedTags();
        setImage(null);
        setCv(null);
        setIsUploading(false);
        closeModal();
        Store.addNotification({
          message: 'Alumno creado correctamente',
          type: 'success',
          container: 'bottom-left',
          dismiss: {
            duration: 3000
          }
        });
        addCreatedCandidate(candidate);
      })
      .catch(() => {
        Store.addNotification({
          message: 'Hubo un error creando el alumno, intanta de nuevo',
          type: 'danger',
          container: 'bottom-left',
          dismiss: {
            duration: 3000
          }
        });
        setIsUploading(false);
      });
  };

  return (
    <ReactModal
      isOpen={showModal}
      className="container modal"
      overlayClassName="modal__overlay"
    >
      <div className="modal__content">

        <div className="modal__header">
          <span className="modal__headerTitle">Nuevo Alumno</span>
          <BiX size={28} className="modal__headerButton" onClick={closeModal} />
        </div>

        <form className="modal__form" id="new-candidate-form" onSubmit={onSubmit}>
          <div className="modal__formLeft">
            <InputText
              type="text"
              labelText="Nombre y Apellidos"
              placeholder="Ej: Juan Pérez Lorca"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="double-input">
              {countriesDropdown}
              {cittiesDropdown}
            </div>

            <div className="double-input">
              <InputText
                type="phone"
                labelText="Nº Teléfono"
                placeholder="Ej: +34 612 34 56 78"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <InputText
                type="email"
                labelText="Email"
                placeholder="Ej: user@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="double-input">
              <Dropdown
                title="Presencialidad"
                isSearchable={false}
                value={modality}
                options={modalityOptions}
                onChange={(opt) => setModality(opt)}
                placeholder="Elige una opción"
              />
              <Dropdown
                title="Traslado"
                isSearchable={false}
                value={relocation}
                options={relocationOptions}
                onChange={(opt) => setRelocation(opt)}
                placeholder="Elige una opción"
              />
            </div>
          </div>

          <div className="modal__formRight">

            <div className="input-group input-group--file">
              <span className="input-group__label" htmlFor="image">Foto de perfil</span>
              {image ?
                (<UploadedFile file={image} removeFile={() => setImage(null)} />) :
                (<div className="modal__uploadButton">
                  <FileUploader
                    onFileSelect={onImageSelect}
                    text="Subir imagen"
                    accept="image/png,image/jpg,image/jpeg" />
                  <div className="modal__uploadInfo">
                    <p>Archivos soportados: <span>.png, .jpg, y .jpeg</span></p>
                    <p>Tamaño de archivo máximo: <span>2 MB</span></p>
                  </div>
                </div>)}
            </div>

            <div className="input-group input-group--file">
              <span className="input-group__label" htmlFor="cv">Documento CV</span>
              {cv ?
                (<UploadedFile file={cv} removeFile={() => setCv(null)} />) :
                (<div className="modal__uploadButton">
                  <FileUploader
                    onFileSelect={onCvSelect}
                    text="Subir documento PDF"
                    accept="application/pdf" />
                  <div className="modal__uploadInfo">
                    <p>Archivos soportados: <span>.pdf</span></p>
                    <p>Tamaño de archivo máximo: <span>20 MB</span></p>
                  </div>
                </div>)}
            </div>

            {tagsDropdown}

          </div>
        </form>
      </div>

      <div className="modal__footer">
        <Button disabled={!isFormCompleted || isUploading} text="Guardar" form="new-candidate-form" type="submit" />
        <Button text="Cancelar" variant="grey" onClick={closeModal} />
      </div>
    </ReactModal>
  );
};

export default Modal;
