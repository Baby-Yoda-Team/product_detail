import React from 'react';
import styled from 'styled-components';

const NameH = styled.h1`
  color: #333333;
`

const Header = ({product}) => {

  return(
  <div>
    <NameH>{product.productName}</NameH>
  </div>

  );
};

export default Header;
