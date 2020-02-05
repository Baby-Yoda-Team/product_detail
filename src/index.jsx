import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

//import all the components here
// import NavBar from './components/NavBar.jsx'
import Top from './components/Top.jsx'
import Header from './components/Header.jsx'
import Price from './components/Price.jsx'
import Shipping from './components/Shipping.jsx'
import Features from './components/Features.jsx'
import AddCart from './components/AddCart.jsx'
import Compare from './components/Compare.jsx'
import Share from './components/Share.jsx'

import fetchData from './fetchData.js'
// import App from './components/App.jsx';

import axios from 'axios';
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      product: null
    }
  }

  componentDidMount(){
    var productId = window.location.pathname.split('/').join('') || 1;
    console.log(productId)

    //deconstruct the dbData
    // const {dbData} = this.state;

    fetchData(productId)
    .then(({ data }) => {
      console.log('this is the data inside component did mount',data)
      this.setState({
        product: data,
      })
      // console.log('the dbData is showing in the client', data);
      // this.setState({
      //   dbData: data.data,
      // })
      // console.log(this.state.dbData)
    })
  }


  render() {
    const detailsData = this.state.dbData

    const { product } = this.state;
    console.log('I have the product inside the render here', product)
    //   // console.log('console logging a obj zero', detailsData[0].productName)
    //   // console.log('console logging the features in the obj zero', detailsData[0].productFeatures)

    return (
      !this.state.product ? null :
      <div>
        {/* <Header product={product}/> */}
        <Top product={product}/>
        <Price product={product}/>
        <Shipping product={product}/>
        <Features product={product}/>
        <AddCart product={product}/>
        <Compare product={product}/>
        <Share product={product}/>
      </div>
    );
  }
}

//change it to notapp
ReactDOM.render(<App/>, document.getElementById('notapp'));