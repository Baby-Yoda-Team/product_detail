import React from 'react'

const Features = ({product})  => {

  return(
    <div className="features-container">
    <p id="shipping-statement">Shipping &amp; Handling Included</p>
    <span>Features:</span>
      <ul className="product-features">
        <li>1-Year iFit® Coach Membership Included</li>
        <li> Custom-Focus Weight Loss Workouts with Weight Entry</li>
        <li>3.0 CHP Motor</li>
        <li>20” x 60” Tread Belt</li>
        <li>Tablet Not Included</li>
      </ul>
  </div>

  );
};

export default Features;



{/* <div className="features-container">
          <p id="shipping-statement">Shipping &amp; Handling Included</p>
          <span>Features:</span>
            <ul className="product-features">
              <li>1-Year iFit® Coach Membership Included</li>
              <li> Custom-Focus Weight Loss Workouts with Weight Entry</li>
              <li>3.0 CHP Motor</li>
              <li>20” x 60” Tread Belt</li>
              <li>Tablet Not Included</li>
            </ul>
        </div> */}