var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var autoIncId = function(counterId){
  return function(next){
    var doc = this;

    Counter.findByIdAndUpdate({_id: counterId}, {$inc: { seq: 1} }, function(err, counter)   {
        if(err) return next(err);
        doc._id = counter.seq;

        next();
    });
  }
}

// define the schema for our user model

var CounterSchema = Schema({
    _id: {type: String, required: true},
    seq: { type: Number, default: 0 }
});
var Counter = mongoose.model('Counter', CounterSchema);

var publisherSchema = Schema({
    _id           : Number,
    name          : String,
    desc          : String,
    columns       : [{ type:Number , ref: 'Columns' }]
    //profilePic    : String,//filename
    //coverPic      : String,//filename
    //column        : [{type:Number, ref:'columnSchema'}]
});
  publisherSchema.pre('save', autoIncId('pubId'));
  var Publishers = mongoose.model('Publishers', publisherSchema);


var columnSchema = Schema({
  _id : Number,
  name: String,
  desc: String,
  //filename
  profilePic: String,
  //filename
  coverPic: String,
  _publisher: { type:Number , ref:'Publishers'},
  //_articles: [{type:Number, ref:'articleSchema'}]
});
  columnSchema.pre('save', autoIncId('colId'));
  var Columns    = mongoose.model('Columns', columnSchema);


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
articleSchema.pre('save', autoIncId('articleId'));
var Articles = mongoose.model('Articles', articleSchema);




// generating a hash
//userSchema.methods.generateHash = function(password) {
//    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
//};

// checking if password is valid
//userSchema.methods.validPassword = function(password) {
//    return bcrypt.compareSync(password, this.local.password);
//};

module.exports = { Counter : Counter,
                   Articles: Articles,
                   Publishers:Publishers,
                   Columns:Columns
                 }

//module.exports = mongoose.model('User', userSchema);
//
//Why mongoose add "s" to the end of a collection name 5555.
//http://stackoverflow.com/questions/10547118/why-does-mongoose-always-add-an-s-to-the-end-of-my-collection-name