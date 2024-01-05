import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md"
import { Icon } from '@chakra-ui/react';
import styled from 'styled-components';

const Navbar = () => {
      const heading = useState('New Beauty Offer');
      const subHeading = useState('Discover the Latest Trends');
      const [time,setTime] = useState(true)
      const navigate = useNavigate();
      
      useEffect(() => {
            const interval = setInterval(() => {
              setTime(prev => !prev)
            }, 800);
      
            return () => clearInterval(interval);
          }, [time]);
  return (
    <NAV>
      <div className='head'>
            {
                  time && 
            <h2>{heading} <span>{subHeading}</span></h2>
            }
      </div>
      <div className='sec'>
            <div onClick={()=> navigate("/")}>
                  <h1 className='logo'>Nykaa</h1>
            </div>
            <div className='last'>
                  <button className='btn' onClick={() => navigate("/login")}>
                        Login
                  </button>
                  <Link to="/cart">
                  <Icon style={{fontSize:"30px", color:"black"}} as={MdOutlineShoppingCart} />
                  </Link>
             </div>
      </div>
      
    </NAV>
  )
}

export default Navbar;

const NAV = styled.div`
width: 100%;
   display: flex;
   flex-direction: column;
   .logo {
      cursor: pointer;
   }
   .sec {
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 0px 5rem;
   }

   @keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.head {
  width: 100%;
  background-image: url("https://images-static.naikaa.com/media/wysiwyg/2021/common-strip.jpg");
  padding: 0;
  margin: 0;
  height: 45px;
  
}
.head h2 {
         padding: 5px 0px;
         margin: 0px;
         transition: height 0.3s ease; /* Transition for height */
  animation: fadeIn 0.5s ease; /* Animation for fadeIn */
   }
   .head span {
      font-size: 18px;
      transition: height 0.3s ease; /* Transition for height */
  animation: fadeIn 0.5s ease; /* Animation for fadeIn */
   }
   .last {
      display: flex;
      gap: 25px;
   }
   .btn {
      padding: 7px 10px;
      border: none;
      background-color:#ed3e98 ;
      font-size: 15px;
      font-weight: bold;
      color: whitesmoke;
      border-radius: 5px;
      cursor: pointer;
   }
   
`