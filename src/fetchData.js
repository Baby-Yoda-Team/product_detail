import axios from 'axios'

const fetchData = function(){
  return axios.get('/api/details' )
  .then((data) => {
    // console.log('here we have all the Product Details', data)
    return data;
  })
  .catch((err) => {
    console.log('you have an error inside the fetchData call', err);
  })
}


export default fetchData;