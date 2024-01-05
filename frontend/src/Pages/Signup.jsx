import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";


export const Signup = () => {    
  

  const [formData, setData] = useState({
    name:"",
    email:"",
    password:"",
    avatar: ""
  });

  const handlleChange = (e) => {
    setData({...formData, [e.target.name] : e.target.value})
  }

  const handleFileInput = (e) => {
    const file = e.target.file[0]
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios
    .post("https://kind-lime-lobster-hem.cyclic.app/api/register",)
  }

   return (
      <SIGN>
        <div className="first">
          <div className="first-inner">
            <div className="second">
              <h3 className="headng">
                Create an <span style={{color:"#ed3e98"}}>account</span>
              </h3>
              <form className='form' onSubmit={submitHandler}>
                <div className='div'>
                  <div>
                    <input className='input' type="text" value={formData.name} placeholder='Full Name' name='name' onChange={handlleChange} required/>
                  </div>
                  <div>
                  <input className='input' type="email" value={formData.email} placeholder='Enter Your Email' name='email' onChange={handlleChange} required/>
                  </div>
                  <div>
                  <input className='input' type="password" value={formData.password} placeholder='Enter Your Password' name='password' onChange={handlleChange} required/>
                  </div>
                  <div>
                  <input className='input' type="text" value={formData.avatar} placeholder='Enter image URL' name='avatar' onChange={handlleChange} required/>
                  </div>
                  
                  <button className='btn' type='submit'>Rgister</button>
                  <p>Already registered? <Link className='Link' to="/login">Login</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SIGN>
   )
}

const SIGN = styled.div`
width: 400px;
margin: 50px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

.Link {
    font-weight: 400;
    color: #ed3e98;
  }
  p {
    color: #5d5959;
    margin: auto;
  }
  .heading {
    color: #2f2d2d;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 1px;
  }
  .form {
    padding: 20px 0px;
  }
  .div {
    display: flex;
    flex-direction: column;
    gap: 20px;

  }
  .input {
    width: 100%;
    padding: 8px 10px;
    border: none;
    box-shadow: 0px 0px 0px 1px rgba(60, 64, 67, 0.15);
    border-radius: 7px;
    outline: none;
  }

.first-inner {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 25px;
}
.headng {
  color: #111011;
  font-weight: 500;
  margin-bottom: 20px;
}
 
  .img {
    width: 100%;
  }
  .btn {
  background-color: var(--color-primary);
  padding: 7px 15px;
  color: white;
  font-weight: 600;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--color-primary);
}
`
