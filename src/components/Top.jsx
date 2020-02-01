import React from 'react'

const Top = ({product})  => {

  return(
  <div className="top">
    <h1 className="name">{product.productName}</h1>
    <span className="stars-rating">  ★★★★★  </span>
    <span className="ratingValue">3.0</span>
    <span className="reviewCount">(366)</span>
    <p>Item &nbsp;<span>{product.productItemNumber}</span></p>
  </div>

  );
};

export default Top;


//THIS IS THE OG DIV
{/* <div className="top">
<h1 className="name">NordicTrack Elite 1400 Treadmill with 1-Year iFit Coach Membership- Assembly Required</h1>
<span className="stars-rating">  ★★★★★  </span>
<span className="ratingValue">3.0</span>
<span className="reviewCount">(366)</span>
<p>Item &nbsp;<span> 1312119</span></p>
</div> */}
