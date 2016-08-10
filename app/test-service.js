var Publishers = require('./models/test-mongoose').Publishers;
var Columns = require('./models/test-mongoose').Columns;
var Articles = require('./models/test-mongoose').Articles;

module.exports.test = {

    	postPub : function (id,name,desc) {
    		return addPubToDb(id,name,desc);
    	},

    	postCol : function (id,name,desc) {
    		return addColToDb(id,name,desc);
    	}

};

function addPubToDb(id,name,desc){

		var newPub = new Publishers();
			newPub.id    		= id ;
			newPub.name    		= name ;
			newPub.desc			= desc ;
			console.log("postPub");

		newPub.save(function (err) {
		  if (err)
		 	 return console.log(err);
		});
};

function queryPubFromDB(){

		//Publishers.findOne({"id" : id }, function(err, pub){
	    //}); //end Publisher.find

};

function addColToDb(id,name,desc){

		var newCol = new Columns();
			newCol.id    		= id ;
			newCol.name    		= name ;
			newCol.desc			= desc ;
			console.log("postCol");

		newCol.save(function (err) {
		  if (err)
		 	 return console.log(err);
		});
};

