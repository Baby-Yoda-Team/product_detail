const mongoose = require('mongoose');
 //mongoose.connect('mongodb://localhost/fetcher'); // mongourl

let practiceSchema = mongoose.Schema({
  // TODO: your schema here!
  title:  String, // String is shorthand for {type: String}
  author: String,
  body:   String
  console.log('the practice schema is working ')
});

let Repo = mongoose.model('Repo', practiceSchema);
console.log(Repo)


var newPractice = new Repo()


// let save = (/* TODO */) => {
//   // TODO: Your code here
//   // This function should save a repo or repos to
//   // the MongoDB
// }



module.exports.save = save;