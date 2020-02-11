import React from 'react'
import styled from 'styled-components'


//!STYLE COMPONENTS
const ClassPrice = styled.div`
  display:flex;
  justify-content: space-between;
`

const PriceStyled = styled.span`
  color:#333333;
  font-size:1.5em;
  box-sizing: border-box;

`
const Value = styled.span`
  color:#333333;
  font-size:2.25rem;
  box-sizing: border-box;
`


const Price = ({product})  => {

  return(
    <ClassPrice>

      <PriceStyled>
        <span className="text">Your Price </span>
      </PriceStyled>

      <Value>
        <span className="value">${product.productPrice}</span>
      </Value>
	  </ClassPrice>

  );
};

export default Price;



