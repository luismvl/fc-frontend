import React from 'react';

import DeletableTag from '../pure/DeletableTag';
import { BiCloudUpload, BiTrash, BiMap } from 'react-icons/bi'

import '../../styles/candidate-form.css'
import '../../styles/form.css'
import '../../styles/general.css'

import candidateImg from '../../assets/image.jfif';
import pdf from '../../assets/fake-cv.pdf';

const CandidateData = ({ candidate }) => {
  //TODO: Refactorizar
  return (
    <div style={{display: 'flex', gap: '40px', padding: '40px'}}>
      <div className="container candidate-form">
        <div className="candidate-form__header">

          <img className="candidate-form__image" src={candidateImg} alt="candidate" />

          <div className="candidate-form__info">
            <span className="candidate-form__name">Luis Manuel Vela Linares</span>
            <span className="candidate-form__location"><BiMap size="20px"/> Barinas | Venezuela</span>
          </div>
        </div>

        <form action="#" className="candidate-form__form">
          <div className="input-group">
            <label className="input-group__label" htmlFor="name">Nombre y Apellidos</label>
            <input className="input-group__input" type="text" name="name" id="name" defaultValue="Luis Manuel Vela Linares" />
          </div>

          <div className="double-input">
            <div className="input-group">
              <label className="input-group__label" htmlFor="phone">Nº Teléfono</label>
              <input className="input-group__input" type="phone" name="phone" id="phone" defaultValue="+58 424 123 4567" />
            </div>
            <div className="input-group">
              <label className="input-group__label" htmlFor="email">Email</label>
              <input className="input-group__input" type="email" name="email" id="email" defaultValue="luis@mail.com" />
            </div>
          </div>
          <div className="double-input">
            <div className="input-group input-group--select">
              <label className="input-group__label" htmlFor="country">País</label>
              <select className="input-group__input" name="country" id="country">
                <option defaultValue="spain">España</option>
              </select>
            </div>
            <div className="input-group input-group--select">
              <label className="input-group__label" htmlFor="city">Ciudad</label>
              <select className="input-group__input" name="city" id="city">
                <option defaultValue="Andalucia">Andalucia</option>
                <option defaultValue="Aragon">Aragon</option>
                <option defaultValue="Asturias">Asturias</option>
                <option defaultValue="Baleares">Baleares</option>
                <option defaultValue="Ceuta">Ceuta</option>
                <option defaultValue="Canarias">Canarias</option>
                <option defaultValue="Cantabria">Cantabria</option>
                <option defaultValue="Castilla-La Mancha">Castilla-La Mancha</option>
                <option defaultValue="Castilla y Leon">Castilla y Leon</option>
                <option defaultValue="Cataluna">Cataluna</option>
                <option defaultValue="Comunidad Valenciana">Comunidad Valenciana</option>
                <option defaultValue="Extremadura">Extremadura</option>
                <option defaultValue="Galicia">Galicia</option>
                <option defaultValue="La Rioja">La Rioja</option>
                <option defaultValue="Madrid">Madrid</option>
                <option defaultValue="Melilla">Melilla</option>
                <option defaultValue="Murcia">Murcia</option>
                <option defaultValue="Navarra">Navarra</option>
                <option defaultValue="Pais Vasco">Pais Vasco</option>
              </select>
            </div>
          </div>
          <div className="double-input">
            <div className="input-group">
              <label className="input-group__label" htmlFor="phone">Nº Teléfono</label>
              <input className="input-group__input" type="phone" name="phone" id="phone" defaultValue="+58 424 123 4567" />
            </div>
            <div className="input-group">
              <label className="input-group__label" htmlFor="email">Email</label>
              <input className="input-group__input" type="email" name="email" id="email" defaultValue="luis@mail.com" />
            </div>
          </div>
          <div className="double-input">
            <div className="input-group input-group--select">
              <label className="input-group__label" htmlFor="relocation">Traslado</label>
              <select className="input-group__input" name="relocation" id="relocation">
                <option defaultValue="true">Sí</option>
                <option defaultValue="false">No</option>
              </select>
            </div>
            <div className="input-group input-group--select">
              <label className="input-group__label" htmlFor="presenciality">Presencialidad</label>
              <select className="input-group__input" name="presenciality" id="presenciality">
                <option defaultValue="remote">Remoto</option>
                <option defaultValue="presential">Presencial</option>
                <option defaultValue="mixed">Mixto</option>
              </select>
            </div>
          </div>
          <div className="input-group input-group--file">
            <label className="input-group__label" htmlFor="cv">Documento CV</label>
            <input className="input-group__input" type="file" accept="application/pdf" name="cv" id="cv" />
            <div className="cv-buttons">
              <label htmlFor="cv">
                <span className="button button--grey"><BiCloudUpload size="20px"/>Subir de nuevo</span>
              </label>
              <span className="button button--white"><BiTrash size="20px"/>Borrar</span>
            </div>
          </div>
          <div className="input-group input-group--select">
            <label className="input-group__label" htmlFor="tags">Etiquetas</label>
            <input className="input-group__input" list="tags-list" id="filter" name="tags"
              placeholder="Escribe para buscar..." />
              <datalist id="tags-list">
                <option defaultValue="HTML&CSS"></option>
                <option defaultValue="REACTJS"></option>
                <option defaultValue="SPRING"></option>
                <option defaultValue="FLUTTER"></option>
              </datalist>
              <div className="candidate-tags-list" id="candidate-tags-list">
                <DeletableTag name="html&css" />
                <DeletableTag name="reactjs" />
              </div>
          </div>

        </form>
      </div>
      <div className="candidate-cv">
        <iframe src={pdf} width="100%" height="100%" title="candidate-cv">
        </iframe>
      </div>
    </div>
  );
};

export default CandidateData;
