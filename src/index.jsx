import React from 'react';
import ReactDOM from 'react-dom';

//import all the components here
import Top from './components/Top.jsx'
import Price from './components/Price.jsx'
import Features from './components/Features.jsx'
import AddCart from './components/AddCart.jsx'
import Compare from './components/Compare.jsx'
import Share from './components/Share.jsx'

import fetchData from './fetchData.js'
// import App from './components/App.jsx';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      dbData : [],
      mount: false
    }
  }

  componentDidMount(){
    //deconstruct the dbData
    const {dbData} = this.state;

    fetchData()
    .then((data) => {
      // console.log('the dbData is showing in the client', data);
      this.setState({
        dbData: data.data,
        mount: true
      })
      console.log(this.state.dbData)
    })
  }


  render() {
    const detailsData = this.state.dbData
    let components = null;
    console.log('I have the detailsData inside the render here', detailsData)

    if(this.state.mount) {
      console.log('console logging a obj zero', detailsData[0].productName)

      components = (
        <div>
          <Top product={detailsData[0]}/>
          <Price product={detailsData[0]}/>
          <Features product={detailsData[0]}/>
          <AddCart product={detailsData[0]}/>
          <Compare product={detailsData[0]}/>
          <Share product={detailsData[0]}/>
        </div>
      );
    }


    return (
      <div>
        {components}
      </div>

    );

  }
}







ReactDOM.render(<App/>, document.getElementById('app'));