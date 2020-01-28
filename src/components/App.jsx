import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div class="top">
          <h1 class="name">NordicTrack Elite 1400 Treadmill with 1-Year iFit Coach Membership- Assembly Required</h1>
          <span class="stars-rating">  ★★★★★  </span>
          <span class="ratingValue">3.0</span>
          <span class="reviewCount">(366)</span>
          <p>Item &nbsp;<span> 1312119</span></p>
        </div>

        <div class="your-price">
          <span class="text">Your Price </span>
          <span class="value">$1,999.99</span>
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

        <div class="features-container">
          <p id="shipping-statement">Shipping &amp; Handling Included</p>
          <span>Features:</span>
            <ul class="product-features">
              <li>1-Year iFit® Coach Membership Included</li>
              <li> Custom-Focus Weight Loss Workouts with Weight Entry</li>
              <li>3.0 CHP Motor</li>
              <li>20” x 60” Tread Belt</li>
              <li>Tablet Not Included</li>
            </ul>
        </div>


        <div class="form-container">
				 <ul>
				 		<li id="qty-input">
				      <label for="minQtyText" class="offscreen">Qty</label>
								<input type="tel" id="minQtyText" class="form-control valid" name="quantity" maxlength="3" value="1"/>
				    </li>

            <li id="add-to-cart">
              <input type="button" id="add-to-cart-btn" value="Add to Cart" class="primary" name="add-to-cart"/>
            </li>
				</ul>
			</div>


      <div class="style-check compare-container">
        <input id="compare" type="checkbox" name="compare-product" value="true" />
          <span>Compare Product</span>
      </div>


      <span class="social-media">Share</span>
	      <ul class="social list-inline">
          <li class="social-icon" onclick="COSTCO.Social.shareWindow('facebook')">
            <label class="hide">facebook</label>
            <i class="fi-social-facebook"></i>
          </li>
          <li class="social-icon" onclick="COSTCO.Social.shareWindow('twitter')">
            <label class="hide">twitter</label>
            <i class="fi-social-twitter"></i>
          </li>
          <li class="social-icon" onclick="COSTCO.Social.shareWindow('pinterest')">
            <label class="hide">pinterestt</label>
            <i class="fi-social-pinterest"></i>
          </li>
          <li class="social-icon" onclick="COSTCO.Social.shareWindow('google')">
            <label class="hide">google</label>
            <i class="fi-social-google-plus"></i>
          </li>
        </ul>

      </div>
    );
  }
}

export default App;