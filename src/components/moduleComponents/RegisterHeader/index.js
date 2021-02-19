import React  from 'react';
import {NavLink} from 'react-router-dom';

import '../../../styles.css';
import Logo from '../../images/logo.png';


function RegisterHeader() {
  return (
    <header>
        <nav className="rhNav">
            <NavLink className="rh_logo" to="/">
                <img className="navImg" src={Logo} alt="logo header"/>            
            </NavLink>
            <ul className="rhNav_ul">
                <li>                    
                    <NavLink className="navLinks_nav" to="/login">Log In</NavLink>
                </li>
                <li>
                    <NavLink className="navLinks_nav" to="/signup">Sign Up</NavLink>                 
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default RegisterHeader;



