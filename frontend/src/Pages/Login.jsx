import React, { useState } from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setData] = useState({
    email:"",
    password:""
  });

  const handlleChange = (e) => {
    setData({...formData, [e.target.name] : e.target.value})
  }

  return (
    <LOGIN>
      <div className="first">
        <h3 className='heading'>Hello! <span className='wel'>Welcome</span> Back 🎉</h3>
        <form className='form' action="">
          <div className='div'>
            <input className='input' type="email" value={formData.email} placeholder='Enter Your Email' name='email' onChange={handlleChange} required/>
            <input className='input' type="password" value={formData.password} placeholder='Enter Your Password' name='password' onChange={handlleChange} required/>
            <button className='btn' type='submit'>Login</button>
            <p>Don't have an account? <Link className='Link' to="/register">Register</Link></p>
          </div>
        </form>
      </div>
    </LOGIN>
  )
}

export default Login;

const LOGIN = styled.div`
  width: 350px;
  margin: 100px auto;
  border-radius: 10px;
  padding: 30px 5rem;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  .btn {
    width: 150px;
    margin: auto;
    margin-top: 20px;
    border: none;
    padding: 7px 0px;
    background: #ed3e98;
    color: white;
    font-weight: 600;
    font-size: 18px;
    border-radius: 7px;
  }
  .Link {
    font-weight: 400;
    color: #ed3e98;
  }
  p {
    color: #7f7878;
    margin: auto;
  }
  .first {
    width: 100%;
    max-width: 570px;
    margin: 0px auto;
  }
  .heading {
    color: #2f2d2d;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 1px;
  }
  .wel {
    color: #ed3e98;
  }
  .form {
    padding: 4rem 0px;
  }
  .div {
    display: flex;
    flex-direction: column;
    gap: 20px;

  }
  .input {
    width: 90%;
    padding: 8px 10px;
    border: 2px solid var(--color-primary);
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    border-radius: 7px;
    outline: none;
  }
  .input:focus {
  outline: 1px solid var(--color-primary); /* Set outline when focused */
}
`