import React from 'react'
import styled from 'styled-components'


//!STYLE COMPONENTS
const Name = styled.h1`
  color:#333333;
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
`
const Stars = styled.span`
  color: #1F60A9;
  cursor: pointer;
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
  font-size:.8em;
`
const Grey = styled.span`
  color: #C0C0C0;
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
`
const ItemNumber = styled.span`
  color:#333333;
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
  font-size:.8em;
`


//!MY DIV
const Top = ({ product })  => {
  console.log('Props --> ', product)
  return(
  <div className="top">

    <Name>{product.productName}</Name>

    <Stars> ★★★<Grey>★★</Grey>
    <span className="ratingValue"> 3.0 </span>
    <span className="reviewCount">{product.productReviewCount}</span>
    </Stars>

    <ItemNumber>
      <p>Item &nbsp;<span>{product.productItemNumber}</span></p>
    </ItemNumber>
  </div>

  );
};

export default Top;

