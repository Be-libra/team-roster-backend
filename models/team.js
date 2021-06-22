var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var teamSchema =  new Schema({
    name : {type:String,required:true,unique:true},
    players:[{type:Schema.Types.ObjectId,ref:"Player"}]

})

module.exports = mongoose.model('Team', teamSchema);