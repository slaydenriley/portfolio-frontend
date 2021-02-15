import React from 'react';

const Login = (props) => {

    return (
      <div className="login">
        <h1>Login</h1>
        <div className="errors">{props.errors}</div>
        <form>
          <input type='text' placeholder='Email' name="email" required/><br/>
          <input type='password' placeholder='Password' name="password" required/><br/>
          <input className="submit" type="submit"/>
        </form>
      </div>
    )
}

export default Login
