import React from 'react'
import styled from 'styled-components'


//!STYLE COMPONENTS
const Text = styled.span`
  color:#333333;
  cursor:pointer;
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
`

const Compare = ({product})  => {

  return(
    <div className="compare-container">


      <input id="compare" type="checkbox" />

      <Text>
        <span>   Compare Product</span>
      </Text>
    </div>
  );
};

export default Compare;


