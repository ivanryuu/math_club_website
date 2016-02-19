var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var officerSchema = new Schema({
  name: String,
  position: String,
  email: String,
  pictureUrl: String,
  intro: String
});

// the schema is useless so far
// we need to create a model using it
var Officer = mongoose.model('Officer', officerSchema);

// make this available to our users in our Node applications
module.exports = Officer;