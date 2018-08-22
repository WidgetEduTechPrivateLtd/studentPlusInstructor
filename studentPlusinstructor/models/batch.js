//Require Mongoose
var mongoose = require('mongoose');

//Define a Schema
var Schema = mongoose.Schema;

var batchSchema = new Schema(
  {
    startdate: {type: Date, required: true},
    endDate: {type: Date, required: true},
    totalLecture: {type: Number, required: true, min: 1},
    extraClassAllowed: {type: Number, required: true, min: 0},
    courseId: {type: Schema.Types.ObjectId, required: true, min: 1},
    schedule: {type: String, required: true, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], min: 1, max: 7},
    timing: {type: String, required: true, min: 1}
  }
);

batchSchema
.virtual('url')
.get(function(){
  return '/batch='+this._id+'/';
});

module.exports = mongoose.model('batch');
