import React from 'react';
import './style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="content-nav">            
        <div>
          <img className="logo" src="https://static.xx.fbcdn.net/rsrc.php/v3/y4/r/gf6iHxsw8zm.png" alt=""/>
        </div>
      
        <div className="profile">
          <FontAwesomeIcon icon={faUserCircle} className="icon-user"/>
          <span>Meu perfil</span>
        </div>          
      </div>
    </div>
  );
}

export default Navbar;
