import React from 'react';
import {NavLink} from 'react-router-dom';



import '../../../styles.css';
import Logo from '../../images/logo.png';


function ProfileHeader() {
  return (
    <header>
        <nav className="ph_nav">
            <NavLink className="Header_logo" to="/">
                <img className="navImg" src={Logo} alt="logo header"/>            
            </NavLink>
            <ul className="navLinks">
                <li>
                    <NavLink className="navLinks_nav" to="/profile">Profile</NavLink>
                </li>
                <li className="ph_sections">
                    <li>
                        <NavLink className="navLinks_nav" to="/repos">Repositories</NavLink>
                    </li>
                    <li>
                        <NavLink className="navLinks_nav" to="/calendar">Calendar</NavLink>
                    </li>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default ProfileHeader;

// onClick={this.burgerFunc}