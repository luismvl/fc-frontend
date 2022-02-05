import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

import Logo from '../pure/Logo';
import Avatar from '../pure/Avatar';
import { BiChevronDown, BiArrowBack } from 'react-icons/bi';

import '../../styles/navbar.css';


const Navbar = () => {
  const { auth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [showLogo, setShowLogo] = useState(true);

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
      <div className="navbar__menu">
        <Avatar />
        <span>UserName</span>
        <BiChevronDown size="20px" />
      </div>

    </div>
  );
};

export default Navbar;
