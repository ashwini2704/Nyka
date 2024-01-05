import React from 'react'
import styled from 'styled-components';

const Brands = () => {
  return (
    <BRAND>
      <div>Lakme</div>
      <div>Kay</div>
      <div>Clinique</div>
      <div>Colorbar</div>
      <div>Plum</div>
      <div>Swiss</div>
      <div>Plum</div>
      <div>Nova</div>
    </BRAND>
  )
}

export default Brands;

const BRAND = styled.div`
width: 70%;
margin: auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px 5rem;
   div {
      font-size: 22px;
      font-weight: 500;
      height: 120px;
      width: 120px;
      display: flex;
   justify-content: center;
   align-items: center;
   background: linear-gradient(to right, #efbbbb, #f1b6b7, #ea8788);
   border-radius: 50%;
   }
`