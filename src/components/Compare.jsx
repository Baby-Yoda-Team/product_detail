import React from 'react'
import styled from 'styled-components'


//!STYLE COMPONENTS
const TextCompare = styled.span`
  color:#333333;
  cursor:pointer;
`

const Compare = ({product})  => {

  return(
    <div className="compare-container">


      <input id="compare" type="checkbox" />

      <TextCompare>
        <span>   Compare Product</span>
      </TextCompare>
    </div>
  );
};

export default Compare;


