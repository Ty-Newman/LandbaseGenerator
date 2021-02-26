import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import '../index.css'
import { authenticate } from '../services/auth';




const ConditionalNavDrawer = ({ setAuthenticated, closeNav }) => {

    const [isLoggedIn, setisLoggedIn] = useState(false);

    useEffect(() => {
      (async() => {
        const user = await authenticate();
        if (!user.errors) {
          setisLoggedIn(true);
        }
      })();
    }, []);

    if (isLoggedIn){
      return(
        <>
          <NavLink to="/my-decks" exact={true} activeClassName="active" onClick={() => closeNav()}>
            My Decks
          </NavLink>
          <LogoutButton setAuthenticated={setAuthenticated} id='side-nav-logout' />
        </>
      )
    } else{
      return(
        <>
            <NavLink to="/login" exact={true} activeClassName="active" onClick={() => closeNav()}>
                Login
            </NavLink>
            <NavLink to="/sign-up" exact={true} activeClassName="active" onClick={() => closeNav()}>
                Sign Up
            </NavLink>
        </>
      )
    }
  }

  export default ConditionalNavDrawer;
