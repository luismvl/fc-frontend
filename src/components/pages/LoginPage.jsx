import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import '../../../src/styles/login.css';
import '../../../src/styles/form.css';
import '../../../src/styles/general.css';

import Logo from '../pure/Logo';
import InputText from '../pure/InputText';
import InputCheckbox from '../pure/InputCheckbox';

import { useAuth } from '../../hooks/useAuth';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, auth } = useAuth();
  if (auth) {
    return <Navigate to="/candidates" />
  }

  return (
    <div className="login-container">
      <div className="login">
        <div className="login__form">
          <Logo />
          <form className="form" onSubmit={e => {
            e.preventDefault();
            login();
            navigate('/candidates');
          }}>
            <InputText
              type="email"
              name="email"
              placeholder="Introduce tu correo"
              labelText="Email"
            />
            <InputText
              type="password"
              name="password"
              placeholder="Introduce tu contaseña"
              labelText="Contraseña"
            />

            <div className="remember-forgot-pass-container">
              <InputCheckbox
                type="checkbox"
                name="remember"
                label="Recuérdame"
              />
              <a className="login__forgot-pass-link" href="#">He olvidado mi contraseña</a>
            </div>
            <button className="button button--span" type="submit">
              Iniciar Sesión
            </button>
          </form>
        </div>
        <div className="login__footer">
          <p>Copyright © 2021 Open Bootcamp SL, Imagina Group</p>
          <p>Todos los derechos reservados.</p>
          <p><a className="login__privacy-policy-link" href="##">Política de Privacidad</a></p>
        </div>
      </div>

    </div>
  );

};

export default LoginPage;
