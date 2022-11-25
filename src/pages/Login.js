import React from 'react';
import { useState } from 'react';
import { useHistory, Link } from "react-router-dom";

import InputForm from '../components/InputForm';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import '../maincss/Login.css';


const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // //Save user email to local storage
  // var userName = () => {
  //   JSON.parse(localStorage.getItem('Email'));
  //   return userName;
  // }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }

  const history = useHistory();

  const handleOnSubmit = (event) => {
    if (email.length === 0) {
      alert("Please input your email! >_< ")
    }
    else if (password.length === 0) {
      alert("Please input your password! >_< ")
    }
    else {
      localStorage.setItem('Email', email);
      localStorage.setItem('Password', password);
      history.push('/todoapp')//redirect to TodoApp
    }
  }


  return (
    <div className='login-box'>
      <div className='login-container'>
        <h1 className='welcome'>Welcome to Axalize Inc.</h1>
        <div className='login-wrapper'>
          <div className='login-left-content'>
            <img className='avatar' src="https://image-us.24h.com.vn/upload/3-2021/images/2021-08-21/ava-1629541107-450-width640height480.jpg"
              alt="avatar" ></img>
          </div>
          <div className="right-content">
            <InputForm
              value={email}
              type="text"
              icon={<FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>}
              label="Email/Username"
              placeholder="Type your email"
              onChange={handleChangeEmail}
              required
              autoFocus
            />
            <br />
            <InputForm
              value={password}
              type="password"
              icon={<FontAwesomeIcon icon={faLock}></FontAwesomeIcon>}
              label="Password "
              placeholder="Type your password"
              onChange={(e) => handleChangePassword(e)}
              required
            />
            <br />
            <button className="login" onClick={handleOnSubmit}>Login</button>
            <br />
            <span className="link-signup">
              Create a new account click <Link to='/signup'>Sign Up</Link></span>
            <span>
              <a href="">Forgot Email </a>/<a href=""> Password?</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
