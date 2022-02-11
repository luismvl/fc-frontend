import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import '../../../src/styles/login.css';
import '../../../src/styles/form.css';
import '../../../src/styles/general.css';

import Logo from '../pure/Logo';
import InputText from '../pure/InputText';
import InputCheckbox from '../pure/InputCheckbox';
import { Store } from 'react-notifications-component';

import { useAuth } from '../../hooks/useAuth';
import Button from '../pure/Button';

const LoginPage = () => {
  const navigate = useNavigate();
  const { login, auth } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLogging, setIsLogging] = useState(false);

  if (auth) {
    return <Navigate to="/candidates" />;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLogging(true);
    login({ email, password, rememberMe })
      .then(() => {
        setIsLogging(false);
        navigate('/candidates');
      })
      .catch((e) => {
        setIsLogging(false);
        Store.addNotification({
          message: 'Email o password incorrectos',
          type: 'danger',
          container: 'bottom-left',
          dismiss: {
            duration: 3000
          }
        });
      });
  };

  return (
    <div className="login-container">
      <div className="login">
        <div className="login__form">
          <Logo />
          <form className="form" onSubmit={onSubmit} id="login-form">
            <InputText
              type="email"
              placeholder="Introduce tu correo"
              labelText="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <InputText
              type="password"
              placeholder="Introduce tu contaseña"
              labelText="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="remember-forgot-pass-container">
              <InputCheckbox
                label="Recuérdame"
                name="remember-me"
                value={rememberMe}
                onChange={(e) => setRememberMe(!rememberMe)}
              />
              <a className="login__forgot-pass-link" href="##">He olvidado mi contraseña</a>
            </div>
            <Button disabled={isLogging} text="Iniciar Sesión" type="submit" span />
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
