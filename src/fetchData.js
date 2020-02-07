import axios from 'axios'

const port = 3008;

const fetchData = function(productId){
  return axios.get(`http://${window.location.hostname}:${port}/api/details?productId=${productId}` )
  .then((data) => {
    // console.log('here we have all the Product Details', data)
    return data;
  })
  .catch((err) => {
    console.log('you have an error inside the fetchData call', err);
  })
}


export default fetchData;