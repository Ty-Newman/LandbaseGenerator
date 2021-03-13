import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { login } from "../../services/auth";

const LoginForm = ({ authenticated, setAuthenticated }) => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const user =  await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      window.location.reload()
    } else {
      setErrors(user.errors);
    }
  };

  const onDemo = async (e) => {
    setEmail('demo@aa.io');
    setPassword('password');
    const user = await login(email, password);
    if (!user.errors) {
      setAuthenticated(true);
      window.location.reload()
    }
  }

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (authenticated) {
    return <Redirect push to="/" />;
  }

  return (
    <div id='login-wrapper'>
    <h1 id='login-logo'>Landbase Generator</h1>
      <form onSubmit={onLogin}>
        <ul className='flex-outer'>
          <li>
            {errors.map((error) => (
              <li id='login-errors'>{error}</li>
            ))}
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={updateEmail}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          </li>
          <li>
            <button type="submit">Login</button>
            <button type="button" onClick={onDemo} value='Demo'>Demo</button>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default LoginForm;
