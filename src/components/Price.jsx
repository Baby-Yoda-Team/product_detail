import React from 'react'

const Price = ({product})  => {

  return(
    <div className="your-price">
      <span className="text">Your Price </span>
      <span className="value">$ {product.productPrice}</span>
	  </div>

  );
};



export default Price;