import React from 'react'

const Share = ({product})  => {

  return(
    <div className="social-media">
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
};

export default Share;




{/* <div className="social-media">
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
      </div> */}