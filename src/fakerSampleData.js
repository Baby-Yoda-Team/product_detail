// you need to require faker
var faker = require('faker');


const sampleData = [{

  id: 1,
  productName: faker.commerce.productName(),
  productItemNumber: faker.finance.account(),
  productPrice: '$ ' + faker.commerce.price(),
  productFeatures: {
    stringOne: 'Made out of the best ' + faker.commerce.productMaterial().toLowerCase() + ' in the market',
    stringTwo: faker.company.catchPhrase(),
    stringThree: faker.company.bsBuzz(),
    stringFour: faker.lorem.sentence(),
    stringFive: faker.commerce.product() + ' not included.'
  }
}]

// console.log(sampleData)
console.log(sampleData[0]['productName'])

