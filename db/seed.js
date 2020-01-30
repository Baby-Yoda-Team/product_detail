var faker = require('faker');
const db = require('./index.js');


//create an empty array
var allProductDetails = []
//loop over it
for (var i = 1; i < 100; i++) {
  let productDetail = {
    productId: i,
    productName: faker.commerce.productName(),
    productItemNumber: faker.finance.account(),
    productPrice: faker.commerce.price(),
    productFeatures: {
      stringOne: 'Made out of the best ' + faker.commerce.productMaterial().toLowerCase() + ' in the market',
      stringTwo: faker.company.catchPhrase(),
      stringThree: faker.company.bsBuzz(),
      stringFour: faker.lorem.sentence(),
      stringFive: faker.commerce.product() + ' not included.'
    }
  }
  allProductDetails.push(productDetail)
}

console.log(allProductDetails);


db.ProductDetail.insertMany(allProductDetails)
  .then(() => {
    console.log('database seeded')
    //close connection
  })
  .catch((err) => {
    console.log('theres an error', err)
  })




