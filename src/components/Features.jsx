import React from 'react'
import faker from 'faker'
import styled from 'styled-components'


//!STYLE COMPONENTS
const FeaturesStyled = styled.span`
  color:#333333;
  display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
`



const Features = ({ product })  => {
  const { productFeatures } = product;
  console.log('features --->', productFeatures)

  return(


      <FeaturesStyled>
        <span>Features:</span>
          <ul className="product-features">
            {productFeatures.map((feature, i) => <li key={faker.lorem.slug()+i}>{feature}</li>)}
          </ul>
      </FeaturesStyled>

  );
};

export default Features;

