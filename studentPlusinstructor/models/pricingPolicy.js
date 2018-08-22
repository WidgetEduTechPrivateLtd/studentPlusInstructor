//Require Mongoose
var mongoose = require('mongoose');

//Define a Schema
var Schema = mongoose.Schema;

var pricingPolicy = new Schema(
  {
    location: {type: Schema.Types.ObjectId, required: true, min: 1},
    amount: {type: Number, required: true, min: 1},
    discountMax: {type: Number, required: true, min: 1}
  }
);

pricingPolicy
.virtual('url')
.get(function(){
  return 'pricingPolicy' + this._id;
});

module.exports = mongoose.model('pricingPolicy');
