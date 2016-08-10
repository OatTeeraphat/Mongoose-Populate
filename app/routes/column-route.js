var mock  = require(__base + 'app/models/mock.js');
var ColumnService  = require('../services/column-service').ColumnService;
var util = require('util');

module.exports = function(app){



/*	app.get('/:publisher/:column', function(req, res) {
		var data =  { "publisher": req.params.publisher,"column": req.params.column };
	    res.send('<html><h1>column of '+ data.column +' in '+ data.publisher +'</h1></html>')
	});*/

	// -------------------- API ------------------------

	app.get('/api/columns', function(req, res){

		if(publisherId = req.query['publisherId']){
			// Get columns specified by publisher id api/columns?publisherId=1
			// can Pagination api/columns?publisherId=1&skip=0&limit=1
			res.json(ColumnService.getColByPubId(publisherId,req.query['skip'], req.query['limit']));
		} else {
			// No query string : Get recent columns of all publisher se.g. on Index Page
			// Get columns api/columns
			// Get columns api/columns?skip=0&limit=1
			res.json(ColumnService.getRecentCol(req.query['skip'], req.query['limit']));
		}
	});

}