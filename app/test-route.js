//var newPub = require('../app/models/test-service').postPub;
var Publishers = require('./models/test-mongoose').Publishers;
var Columns = require('./models/test-mongoose').Columns;
var Articles = require('./models/test-mongoose').Articles;
var test = require('./test-service').test;

module.exports = function(app){

	app.get('/test',function (req,res) {

		Publishers.find(function(err, pub){err,res.json(pub);});

	});

	app.get('/test/poppub',function (req,res) {
		//populate column in pub id
		Publishers.find({id : req.params._id}).populate('_column').exec(function (err, pub) {
  			if (err) return handleError(err);
  			//console.log('The Publishers is %s', pub._column.name);
  			res.send(pub);
		});
	});

	app.post('/test/add',function (req,res) {
     //use postman chrome extention kubb p'win
		var newPub = new Publishers();
			//newPub.id    		= req.body.colId ;
			newPub.name    		= req.body.pubName ;
			newPub.desc			= req.body.pubDesc ;
			newPub._column 		= req.body.colId ;
			console.log("postPub");

		newPub.save(function (err) {
		  if (err)
		 	 return console.log(err);
		 	res.send('good pub')
		 });
	});

	app.post('/testc/add',function (req,res) {

		  var newCol = new Columns();
		  	//newCol.id    		= req.body.colId ;
			newCol.name    		= req.body.colName ;
			newCol.desc			= req.body.colDesc ;
			//newCol._publisher 	= req.body.pubId;

		newCol.save(function (err) {
		  if (err)
		 	 return console.log(err);
		 	res.send('good col')
		});

	});

	app.post('/test', function (req, res) {
		res.send(req.body.name +' pub');
		res.send(test.postPub(req.body.id,req.body.name,req.body.desc));
	});

	app.get('/testc',function (req,res) {

		Columns.find(function(err, col){
			if(err)
				console.log('err@queryColFromDB '+ err);
			res.json(col);
		});//end Publisher.find

	});

	app.post('/testc', function (req, res) {
		res.send(req.body.name +' col');
		res.send(test.postCol(req.body.id,req.body.name,req.body.desc));
	});

};

