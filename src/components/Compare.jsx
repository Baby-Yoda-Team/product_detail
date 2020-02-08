import React from 'react'
import styled from 'styled-components'


//!STYLE COMPONENTS
const TextCompare = styled.span`
  color:#333333;
  cursor:pointer;
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
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


