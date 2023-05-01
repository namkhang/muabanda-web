import axios from 'axios';
import Cookies from 'js-cookie';
import React from 'react';
import { url } from '../../url';

import './Login.css'

const Login = () => {

  async function HandleLogin(){ 
    let username  = document.getElementById('username').value
    let password  = document.getElementById('password').value
        let response =  await axios.post(`${url}items/login` , {username,password})
        if(response.data.success === true){
          Cookies.set('adminID' , response.data.adminID)
          localStorage.setItem('token' , response.data.token)
          window.location.href = '/admin'
        }
        else{
          alert(response.data.message)
        }
  }


    return (
        <div>
        <div className="sidenav">
          <div className="login-main-text">
            <h2>Application<br /> Login Page</h2>
            <p>Login or register from here to access.</p>
          </div>
        </div>
        <div className="main">
          <div className="col-md-6 col-sm-12">
            <div className="login-form">
                <div className="form-group">
                  <label>User Name</label>
                  <input type="text" id='username' className="form-control" placeholder="User Name" />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input type="password" id='password' className="form-control" placeholder="Password" />
                </div>
                <button onClick={HandleLogin} type="submit" className="btn btn-black">Login</button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;
