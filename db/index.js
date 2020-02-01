const mongoose = require('mongoose');
const mongoUri ='mongodb://127.0.0.1:27017/costco'
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
  productItemNumber: { type: Number, unique: true },
  productPrice: Number,
  productFeatures: {
    stringOne: String,
    stringTwo: String,
    stringThree: String,
    stringFour: String,
    stringFive: String
  }
});

let ProductDetail = mongoose.model('ProductDetail', productDetailSchema);


module.exports = {
  db,
  ProductDetail
}
