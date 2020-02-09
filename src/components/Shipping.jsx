import React from 'react'
import styled from 'styled-components'


//!STYLE COMPONENTS
const ShippingStyled= styled.p`
  color:#333333;
  /* @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif; */
  display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`

const ClassShip = styled.div`
  display:flex;
`


const Shipping = ({product})  => {

  return(
    <ClassShip>
      <ShippingStyled>
        <p >Shipping &amp; Handling Included</p>
      </ShippingStyled>
	  </ClassShip>

  );
};

export default Shipping;
