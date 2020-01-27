import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div class="top">
          <h1 itemprop="name">NordicTrack Z 1300i Treadmill with 1-Year iFit Coach Included- Assembly Required</h1>
          <span class="bv-rating-stars-on bv-rating-stars bv-width-from-rating-stats-78" aria-hidden="true">  ★★★★★  </span>
          <span itemprop="ratingValue" aria-hidden="true">3.9</span>
          <span itemprop="reviewCount">(366)</span>
          <p id="product-body-item-number" class="item-number ">Item &nbsp;<span data-sku="1312119">1312119</span></p>
        </div>

        <div class="online-price active" data-opvalue="MSwyOTkuOTk=" data-catentry="1476596" data-inv="IN_STOCK">
          <span class="op-label">Online Price</span>
          <span class="currency">$</span>
          <span class="op-value">1,299.99</span>
        </div>

        <div class="disc active" data-disc="NTAwLjAw" data-catentry="1476596">
          <span class="disc-label">Less</span>
          <span class="minus-ca-fr">-</span>
          <span class="minus">-</span>
          <span class="currency">$</span>
          <span class="disc-value">500.00</span>
        </div>

        <div class="features-container form-group">
          <p id="shipping-statement">Shipping &amp; Handling Included</p>
          <span>Features:</span>
            <ul class="pdp-features">
              <li>1-Year iFit® Coach Membership Included</li>
              <li> Custom-Focus Weight Loss Workouts with Weight Entry</li>
              <li>3.0 CHP Motor</li>
              <li>20” x 60” Tread Belt</li>
              <li>Tablet Not Included</li>
            </ul>
        </div>

      <div class="form-group">
        <input type="button" id="add-to-cart-btn" value="Add to Cart" class="primary" name="add-to-cart"/>
			</div>

      <div class="style-check compare-container">
        <input id="compare_100467947" type="checkbox" name="compare-product" value="true" data-description="NordicTrack Z 1300i Treadmill with 1-Year iFit Coach Included- Assembly Required" title="Compare Product" onclick="COSTCO.compareProducts.toggleItem('100467947','https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&amp;imageId=100467947-847__1&amp;recipeName=350', this)"/>
        <label for="compare_100467947" title="Compare Product" class="mar_top">
          <span>Compare Product</span>
        </label>
      </div>


      <span class="social-share-label visible-xs pull-left">Share</span>
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
    	<span class="social-share-label hidden-xs pull-right">Share</span>

      </div>
    );
  }
}

export default App;