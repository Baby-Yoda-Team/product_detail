import React from 'react'

const Compare = ({product})  => {

  return(
    <div className="style-check compare-container">
      <input id="compare" type="checkbox" name="compare-product" value="true" />
        <span>Compare Product</span>
    </div>
  );
};

export default Compare;






{/* <div className="style-check compare-container">
        <input id="compare" type="checkbox" name="compare-product" value="true" />
        <span>Compare Product</span>
      </div> */}