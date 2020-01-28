import React from 'react';



class App extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <div className="top">
          <h1 className="name">NordicTrack Elite 1400 Treadmill with 1-Year iFit Coach Membership- Assembly Required</h1>
          <span className="stars-rating">  ★★★★★  </span>
          <span className="ratingValue">3.0</span>
          <span className="reviewCount">(366)</span>
          <p>Item &nbsp;<span> 1312119</span></p>
        </div>

        <div className="your-price">
          <span className="text">Your Price </span>
          <span className="value">$1,999.99</span>
	      </div>


        {/* <div class="online-price active">
          <span class="op-label">Online Price</span>
          <span class="currency">$</span>
          <span class="op-value">1,299.99</span>
        </div> */}
        {/* <div class="disc active" data-disc="NTAwLjAw" data-catentry="1476596">
          <span class="disc-label">Less</span>
          <span class="minus-ca-fr">-</span>
          <span class="minus">-</span>
          <span class="currency">$</span>
          <span class="disc-value">500.00</span>
        </div> */}

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


        <div className="form-container">
				 <ul>
				 		<li id="qty-input">
				      <label className="offscreen">Qty</label>
								<input type="tel" id="minQtyText" className="form-control valid" name="quantity" placeholder="1"/>
				    </li>

            <li id="add-to-cart">
              <input type="button" id="add-to-cart-btn" value="Add to Cart" className="primary" name="add-to-cart"/>
            </li>
				</ul>
			</div>


      <div className="style-check compare-container">
        <input id="compare" type="checkbox" name="compare-product" value="true" />
          <span>Compare Product</span>
      </div>


      <span className="social-media">Share</span>
	      <ul className="social list-inline">
          <li className="social-icon" >
            <label className="hide">facebook</label>
            <i className="fi-social-facebook"></i>
          </li>
          <li className="social-icon" >
            <label className="hide">twitter</label>
            <i className="fi-social-twitter"></i>
          </li>
          <li className="social-icon" >
            <label className="hide">pinterestt</label>
            <i className="fi-social-pinterest"></i>
          </li>
          <li className="social-icon" >
            <label className="hide">google</label>
            <i className="fi-social-google-plus"></i>
          </li>
        </ul>
      </div>
    );
  }
}

export default App;