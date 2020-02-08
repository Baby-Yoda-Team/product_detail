import axios from 'axios'

const port = 3008;
const EC = 'http://ec2-52-14-25-174.us-east-2.compute.amazonaws.com:3008/'

const fetchData = function(productId){
  // return axios.get(`http://${window.location.hostname}:${port}/api/details?productId=${productId}` )
  return axios.get(`${EC}api/details?productId=${productId}` )
  .then((data) => {
    // console.log('here we have all the Product Details', data)
    return data;
  })
  .catch((err) => {
    console.log('you have an error inside the fetchData call', err);
  })
}


export default fetchData;