import React, { useRef } from 'react';
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

  // const mySideNav = useRef(null);
  // const backdrop = useRef(null);

  // function openNav() {
  //     document.getElementById("mySidenav").style.width = "33%" //opens side navbar by 70 percent
  //     document.getElementById('backdrop').style.display = "block" //displays overlay
  // }

  // function closeNav() {
  //     mySideNav.style.width = "0"
  //     document.getElementById('backdrop').style.display = "none"
  // }


  return (
    <div>
      {/* <mySideNav ref={mySideNav} id="mySidenav" className="sidenav-container">

        <span className="drawer-close-button">
          <a href="javascript:void(0)" className="closebtn" onclick={closeNav()}>&times;</a>
        </span>

        <NavLink to="/" onclick={closeNav()} id="home-link">Home</NavLink>
        <NavLink to="/generator" onclick={closeNav()} id="about-link">Generator</NavLink>
        <NavLink to="/login" onclick={closeNav()} id="works-link">Login</NavLink>
        <NavLink to="/signup" onclick={closeNav()} id="contact-link">Signup</NavLink>

      </mySideNav>

      <Backdrop ref={backdrop} className="backdrop-container" id="backdrop" /> */}

      <nav>
        {/* <div id='span-nav'>
          <span onclick={openNav()} className="mobile-nav-open-icon">&#9776;</span>
        </div> */}
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
