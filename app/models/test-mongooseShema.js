// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

/* FOLDER
  Profile pic path : 
  users/[user id]/profile.jpg
  users/[user id]/profile_39x39.jpg
  users/[user id]/profile_160x160.jpg
  
  Publisher pic path : 
  publishers/[publisher id]/cover1024x400.jpg
  publishers/[publisher id]/profile200x200.jpg
*/

/*
  ROLES
  - member : 0 
  - editor : 1
  - writer : 2
  - admin : 3
*/

const ROLES = ['member', 'editor', 'writer', 'admin'];

var userSchema = new Schema({
  _id: Number,
  email: {
    type:String,
    required: true
  },
  firstname: String,
  lastname: String,
  display: {
    type:String,
    required: true
  },
  //hashed
  password: {
    type:String,
  },
  username:  {
    type:String,
    required: true
  },
  // limit 100 characters
  desc: String,
  facebook: {
    id: String,
    email: String,
    name: String,
    token: String
  },
  
  //pic filename
  _uploadPic: String,
 
  //ex : user.roles = [{role:0, kind:'publisherSchema', object: 3 }]
  roles: [{
    role: Number, //e.g. 0

    kind: String,
    object: {type: Number, refPath: 'roles.kind'}
  }]
  
})

// RETURN pic path
userSchema.virtual('pic').get(function(){
  /*
    TODO return pic path of users
    
    if uploadpic available, use it 
    else if both have no pic return default pic
    else use fbpic
  */
})

userSchema.virtual('facebook.pic').get(function(){
  return 'http://graph.facebook.com/'+this.facebook.id+'/picture?width=160&height=160'
})

var articleSchema = new Schema({
  _id: Number,
  name: String, 
  readTime: Number, //min to read, compute everytime an article updated
  //filename
  coverPic: String,
  content : String //path raw file 
  
  // TODO 
  // Path picSchema in commentpost >>
})

// NOTE every publisher has default 'all' column
var columnSchema = new Schema({
  _id: Number, 
  name: String,
  //filename
  profilePic: String,
  //filename
  coverPic: String,
  
  _publisher: {type:Number, ref:'publsherSchema'},
  articles: [{type:Number, ref:'articleSchema'}]
})


var publisherSchema = new mongoose.Schema({
  _id           : Number,
  name          : String,
  desc          : String,
  profilePic    : String,//filename
  coverPic      : String,//filename
  columns       : [{type:Number, ref:'columnSchema'}]
});

////////////////// EXAMPLE /////////////////////////
var column = {name : 'Money Idea'}
var user = {email: 'xx@xx.com', roles: [
  { roleName:'member', column: {name : 'Money Idea'} },
  { role: 1, column: {name : 'Fintech'} }
]}

user.roles[0].roleName // => member
