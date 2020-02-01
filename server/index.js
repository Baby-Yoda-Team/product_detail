const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const {ProductDetail} = require('../db/index.js')

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static(path.join(__dirname, '../client/dist')));


//get all the data call
app.get('/api/details', function(req, res) {
  // res.status(200).send('hello')
  console.log('I am inside the api/details')
  ProductDetail.find({})
  .then((details) => {
    res.status(200).send(details)
  })
  .catch((err) => {
    res.status(400)
    console.log('Error inside the api details call', err)
  })
});




app.listen(PORT, () => console.log('Listening on port: ' + PORT));




