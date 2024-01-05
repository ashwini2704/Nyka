import React from 'react'
import { useNavigate } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md"
import { Icon } from '@chakra-ui/react';

const Navbar = () => {
      const navigate = useNavigate()
  return (
    <div>
      <div>
            <h1>Nykaa</h1>
      </div>
      <div>
            <button onClick={() => navigate("/login")}>
                  Login
            </button>
            <Icon as={MdOutlineShoppingCart} />
      </div>
    </div>
  )
}

export default Navbar