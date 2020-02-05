const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const {ProductDetail} = require('../db/index.js')

const app = express();
const PORT = 3008;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/:productId', express.static(path.join(__dirname, '../client/dist')));


//get all the data call
app.get('/api/details/:productId', function(req, res) {
  const { productId } = req.params;
  console.log(productId)
  console.log('I am inside the api/details')
  ProductDetail.findOne({ productId })
  .then((details) => {
    res.status(200).send(details)
  })
  .catch((err) => {
    res.status(400)
    console.log('Error inside the api details call', err)
  })
});






app.listen(PORT, () => console.log('Listening on port: ' + PORT));




