import React  from 'react';
import {NavLink} from 'react-router-dom';

import '../../../styles.css';


function MainHeader() {
  return (
    <header>
        <nav className="mhNav">
            <ul className="mhNav_ul">
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

export default MainHeader;