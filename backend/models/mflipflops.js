var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mflipflopSchema = new Schema({
    src:String,
    name:String,
    price:String,
    votes:String
});

var mflipflop = mongoose.model('mflipflop',mflipflopSchema,'mflipflop');
module.exports = mflipflop;
