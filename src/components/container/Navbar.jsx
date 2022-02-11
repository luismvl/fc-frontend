import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import Logo from '../pure/Logo';
import Avatar from '../pure/Avatar';
import { BiChevronDown, BiArrowBack, BiLogOut } from 'react-icons/bi';

import '../../styles/navbar.css';


const Navbar = () => {
  const { auth, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [showLogo, setShowLogo] = useState(true);
  const [showMenu, setShowMenu] = useState(false);


  useEffect(() => {
    if (location.pathname === '/candidates') {
      setShowLogo(true);
    } else {
      setShowLogo(false);
    }
  }, [location]);

  if (!auth) {
    return <></>;
  }
  return (
    <div className="navbar">
      {
        showLogo ?
          <Logo /> :
          <span className="navbar__goback-button" onClick={() => navigate(-1)}>
            <BiArrowBack size="20px" /> Volver
          </span>
      }
      <div className="navbar__user" onClick={() => setShowMenu(!showMenu)}>
        <Avatar />
        <span>{auth.user.username}</span>
        <BiChevronDown size="20px" />
        {showMenu ?
          (<div className={"navbar__menu"}>
            <div className="navbar__menuOption" onClick={logout}>Cerrar Sesión <BiLogOut /></div>
          </div>) :
          null}
      </div>
    </div>
  );
};

export default Navbar;
