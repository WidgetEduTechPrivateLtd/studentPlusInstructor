//Require Mongoose
var mongoose = require('mongoose');

//Define a Schema
var Schema = mongoose.Schema;

var courseContentSchema = new Schema(
  {
    info: {type: String, required: true, max: 1000, min: 100},
    videoId: {type: String, required: true},
    courseId: {type: Schema.Types.ObjectId, required: true, max:1},
    batchId: {type: Schema.Types.ObjectId}
  }
);

courseContentSchema
.virtual('url')
.get(function(){
  return '/courseContent/' + this._id;
});

module.exports = mongoose.model('courseContent');
