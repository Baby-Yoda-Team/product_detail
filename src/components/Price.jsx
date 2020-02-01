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





//THIS IS THE OG DIV
 {/* <div className="your-price">
          <span className="text">Your Price </span>
          <span className="value">$1,999.99</span>
	      </div> */}