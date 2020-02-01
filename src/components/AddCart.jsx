import React from 'react'

const AddCart = ({product})  => {

  return(
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

  );
};

export default AddCart;