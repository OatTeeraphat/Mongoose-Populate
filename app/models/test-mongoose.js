var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');
var Schema = mongoose.Schema;

// define the schema for our user model

var articleSchema = Schema({
  _id             : Number,
  name            : String,
  readTime        : Number, //min to read, compute everytime an article updated
  //filename
  coverPic        : String,
  content         : String //path raw file

  // TODO
  // Path picSchema in commentpost >>
});

var publisherSchema = Schema({
    //_id           : Number,
    //_id           : Number,
    name          : String,
    desc          : String,
    _column       : [{ type: Schema.Types.ObjectId , ref: 'Columns' }]
    //profilePic    : String,//filename
    //coverPic      : String,//filename
    //column        : [{type:Number, ref:'columnSchema'}]
});

var columnSchema = Schema({
    //_id: Number,
    name: String,
    desc: String,
    //filename
    profilePic: String,
    //filename
    coverPic: String,
    //_publisher: { type:Number , ref:'publisherSchema'},
    //_articles: [{type:Number, ref:'articleSchema'}]
});



var Articles    = mongoose.model('Articles', articleSchema);
var Columns    = mongoose.model('Columns', columnSchema);
var Publishers = mongoose.model('Publishers', publisherSchema);



// generating a hash
//userSchema.methods.generateHash = function(password) {
//    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//};

// checking if password is valid
//userSchema.methods.validPassword = function(password) {
//    return bcrypt.compareSync(password, this.local.password);
//};

// create the model for "users" collection in db
module.exports = {

    Articles    : Articles,
    Columns    : Columns,
    Publishers : Publishers

  };

//module.exports = mongoose.model('User', userSchema);
//
//Why mongoose add "s" to the end of a collection name 5555.
//http://stackoverflow.com/questions/10547118/why-does-mongoose-always-add-an-s-to-the-end-of-my-collection-name