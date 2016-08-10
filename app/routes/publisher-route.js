var mock  = require(__base + 'app/models/mock.js');
var PublisherService  = require('../services/publisher-service').PublisherService;

module.exports = function(app){




/*	app.get('/:publisherName', function(req, res){
		res.send('<html><h1>Page of '+ req.params.publisherName +' Publisher</h1></html>')
	});
*/
	// -------------------- API ------------------------
	//
	app.get('/api/publishers', function(req, res){

		if(Pub_id = req.query._id){
			// Get publisher specified by publisher id api/publisher?id=1
			res.json(PublisherService.getPubByPub_id(Pub_id));

		} else {
			// No query string : Get recent columns of all publisher se.g. on Index Page
			// Get publishers api/publishers,api/publishers?skip=0&limit=1
			res.json(PublisherService.getRecentPub(req.query['skip'], req.query['limit']));
		}
	});

	app.get('/api/:publishersName', function(req, res){
		// Get publisher specified by publisher name api/aommoney
		var PubName = req.params.publishersName ;
		res.json(PublisherService.getPubByPubName(PubName));
	});

	// -------------------- Custom Path Query ------------------------
	//

	app.get('/:publisherName', function(req, res){
		res.send('<html><h1>Page of '+ req.params.publisherName +' Publisher</h1></html>')
	});

	app.get('/:publisher/:column', function(req, res) {
		var data =  { "publisher": req.params.publisher,"column": req.params.column};
	    res.send('<html><h1>'+ data.article +' content of '+ data.column +'</html>')
	});

	app.get('/:publisher/:column/:article', function(req, res) {
		var data =  { "publisher": req.params.publisher,"column": req.params.column,"article": req.params.article };
	    res.send('<html><h1>'+ data.article +' content of '+ data.column +' in '+ data.publisher +'</h1></html>')
	});

	}//module.export



