var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var playerSchema = new Schema(
  {
    name: {type: String, required: true, maxlength: 100},
    team:{type:Schema.Types.ObjectId,ref:"Team"}

  }
);

module.exports = mongoose.model('Player', playerSchema);