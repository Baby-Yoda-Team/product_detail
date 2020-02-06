var faker = require('faker');
const {db, ProductDetail} = require('./index.js');


//create an empty array
var allProductDetails = []
//loop over it
for (var i = 1; i <= 100; i++) {
  let productDetail = {
    productId: i,
    productName: faker.commerce.productName(),
    productReviewCount: '(' + faker.random.number() + ')',
    productItemNumber: faker.finance.account(),
    productPrice: faker.commerce.price(),
    productFeatures: [
      'Made out of the best ' + faker.commerce.productMaterial().toLowerCase() + ' in the market',

      'This product can expose you to ' + faker.commerce.productMaterial().toLowerCase() + '. Please contact the ' +faker.commerce.department().toLowerCase() + ' department for any questions in regards to the product',

      'This product is available in ' + faker.commerce.color() + ', '+ faker.commerce.color() + ', and ' + faker.commerce.color(),

      faker.lorem.sentence() + ' ' +faker.lorem.sentence(),

      faker.commerce.product() + ' not included. Check website to see if the item is available for sale'
    ]
  }
  allProductDetails.push(productDetail)
}

console.log(allProductDetails);


ProductDetail.insertMany(allProductDetails)
  .then(() => {
    console.log('database seeded')
    //close connection
  })
  .catch((err) => {
    console.log('theres an error', err)
  })




