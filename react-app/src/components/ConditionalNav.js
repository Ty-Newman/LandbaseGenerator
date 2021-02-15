import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import '../index.css'
import { authenticate } from '../services/auth';




const ConditionalNav = ({ setAuthenticated }) => {

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
        <li>
        <LogoutButton setAuthenticated={setAuthenticated} id='main-nav-logout' />
        </li>
      )
    } else{
      return(
        <>
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
        </>
      )
    }
  }

  export default ConditionalNav;
