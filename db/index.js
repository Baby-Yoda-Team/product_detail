const mongoose = require('mongoose');
const mongoUri ='mongodb://127.0.0.1:27017/costcoproductdetails'
mongoose.connect(mongoUri)

 var db = mongoose.connection;
 db.on('error', () => {
  console.log('MongoDB connection error:')
 });
 db.once('open',() => {
   console.log('MongoDB connected successfully!!')
 });


let productDetailSchema = new mongoose.Schema({

  productId: { type: Number, unique: true },
  productName: String,
  productReviewCount: String,
  productItemNumber: { type: Number, unique: true },
  productPrice: Number,
  productFeatures: Array
});

let ProductDetail = mongoose.model('ProductDetail', productDetailSchema);


let productDbData = (cb) => {
  ProductDetail.find().exec((error, data) => {
    if(error){
      // console.log('there is an error in this query);
      cb(error)
    } else {
      cb(data);
      //console.log('the data from productDbData)
    }
  });
}

module.exports = {
  db,
  ProductDetail,
  productDbData
}
