import React from 'react';
import "./Pages.css";
const Register = () => {
  return (
    <div className="auth">
        <h1>Register</h1>
        <form>
        <input type="text" placeholder='username'/>
        <input type="email" placeholder='Email'/> 
        <input type="password" placeholder='Password'/>
        <button>Register</button>
        <p>This is an error!</p>
        <span>Do you have an account? <a href="/login">Login</a></span>
        </form> 
    </div>
  )
}

export default Register