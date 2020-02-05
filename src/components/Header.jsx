import React from 'react';
import styled from 'styled-components';

const Name = styled.h1`
  color: #333333;
`

const Header = ({product}) => {

  return(
  <div>
    <Name>{product.productName}</Name>
  </div>

  );
};

export default Header;
