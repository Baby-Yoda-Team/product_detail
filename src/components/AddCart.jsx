import React from 'react'
import styled from 'styled-components'

//!STYLE COMPONENTS
const ClassAddCart = styled.div`
  display:flex;
  justify-content: space-between;
  width:50%;
`

const Line = styled.div`
  padding: 0 5px;
`

const Button = styled.button`
  background-color: #3071a9;
  color:white;
  width: 185px;
  border: zero;
  padding: 0.8em 3em;
  cursor:pointer;
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
`
const Text = styled.span`
  color:#333333;
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
`
const Box = styled.button`
  background-color:white;
  border-color: #9c9c9c;
  color:#333333;
  font-size:.5em;
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  font-family: 'Roboto', sans-serif;
  padding: 6px 12px;

`

const AddCart = ({product})  => {

  return(
    <ClassAddCart>
      <Line>
          <Text>
            <label>Qty</label>
          </Text>
      </Line>

      <Line>
        <Box>
        {/* <input type="tel" placeholder="1"/> */}
        1
        </Box>
      </Line>

      <Line>
        <Button>
            Add to Cart
        </Button>
      </Line>

    </ClassAddCart>
  );
};

export default AddCart;