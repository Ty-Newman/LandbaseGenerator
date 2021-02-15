import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import '../index.css'

// const mySideNav = React.forwardRef((props, red) => {
//   return <div id="mySidenav" className="sidenav-container"></div>
// });

// const Backdrop = React.forwardRef((props, ref) => {
//   return <div className="backdrop-container" id="backdrop"></div>
// });

const NavBar = ({ setAuthenticated }) => {

  const [mySideNav, setMySideNav] = useState('sidenav-container');
  const [backdrop, setBackdrop] = useState('backdrop-container');

  function openNav() {
      setMySideNav('sidenav-container-openNav')
      setBackdrop('backdrop-container-openNav')
  }

  function closeNav() {
    setMySideNav('sidenav-container');
    setBackdrop('backdrop-container');
  }


  return (
    <div>
      <div className={mySideNav}>

        <span className="drawer-close-button">
          <a href="javascript:void(0)" className="closebtn" onClick={() => closeNav()}>&times;</a>
        </span>

        <NavLink to="/" onClick={() => closeNav()} id="home-link">Home</NavLink>
        <NavLink to="/generator" onClick={() => closeNav()} id="about-link">Generator</NavLink>
        <NavLink to="/login" onClick={() => closeNav()} id="works-link">Login</NavLink>
        <NavLink to="/signup" onClick={() => closeNav()} id="contact-link">Signup</NavLink>

      </div>

      <div className="backdrop-container" id="backdrop" ></div>

      <nav>
        <div id='span-nav'>
          <span onClick={() => openNav()} className="mobile-nav-open-icon">&#9776;</span>
        </div>
        <ul>
          <li>
            <NavLink to="/" exact={true} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/generator" exact={true} activeClassName="active">
              Generator
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" exact={true} activeClassName="active">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/sign-up" exact={true} activeClassName="active">
              Sign Up
            </NavLink>
          </li>
          <li>
            <LogoutButton setAuthenticated={setAuthenticated} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
