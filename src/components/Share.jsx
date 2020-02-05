import React from 'react'
import styled from 'styled-components'


//!STYLE COMPONENTS
const ShareStyled = styled.div`
  display:flex;
  justify-content: flex-end;
  width:50%;
`
const Fb = styled.div`
  color:#3C5A99;
  cursor:pointer;
  font-size:25px;
`
const Tw = styled.div`
  color:#37ACED;
  cursor:pointer;
  font-size:25px;
`
const Pin = styled.div`
  color:#D13D41;
  cursor:pointer;
  font-size:25px;
`
const Gl = styled.div`
  color:#CF3C27;
  cursor:pointer;
  font-size:25px;
`
const Line = styled.div`
  padding: 0 5px;
`

//!My DIV
const Share = ({product})  => {

  return(
    <ShareStyled>
      <span className="social-media">Share</span>
      <Line>
        <Fb>
          <i className="fi-social-facebook"></i>
        </Fb>
      </Line>

      <Line>
        <Tw>
          <i className="fi-social-twitter"></i>
        </Tw>
      </Line>

      <Line>
        <Pin>
          <i className="fi-social-pinterest"></i>
        </Pin>
      </Line>

      <Line>
        <Gl>
          <i className="fi-social-google-plus"></i>
        </Gl>
      </Line>

    </ShareStyled>
  );
};

export default Share;


