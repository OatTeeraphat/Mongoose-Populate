var mock  = require(__base + 'app/models/mock.js');
var ArticleService  = require('../services/article-service.js').ArticleService;
//var marked = require ('marked');

module.exports = function(app){


	app.get('/feed', function(req, res) {
		res.render('test-feed.ejs',{ col : mock.columns });
	});

	app.get ('/howto', function (req, res) {

	   // Allow the docs.html template to 'include' markdown files
	   res.render ('howto.ejs');
	});

	// -------------------- API ------------------------

	app.get('/api/articles', function(req, res){

		if(columnId = req.query['columnId']){
			// Get columns specified by publisher id api/articles?columnsId=1
			// can Pagination api/articles?publisherId=1&skip=0&limit=1
			res.json(ArticleService.getArtByColId(columnId,req.query['skip'], req.query['limit']));

		} else if(Id = req.query['Id']) {
			// No query string : Get recent columns of all publisher se.g. on Index Page
			// Get columns api/articles // Get columns api/articles?skip=0&limit=1
			res.json(mock.articles[Id-1]);
		} else {
		    res.json(ArticleService.getRecentArt(req.query['skip'], req.query['limit']));
		}
	});

}

