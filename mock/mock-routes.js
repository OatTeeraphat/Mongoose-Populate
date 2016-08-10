var ColumnService  = require('./mock-service').ColumnService;

module.exports = function(app) {

/*	app.get('/', function(req, res){
		var body = '';
		ColumnService.getRecentColumns().forEach(function(col){
			body += '<p><h1>'+col.name+'</h1><br/><ul>';
			col.articles.forEach(function(article){
				body += '<li>' + article.name + '</li>'
			})
			body += '</ul></p>';
		});

		res.send(`
			<html>
				<body>`
						+body+
				`</body>
			</html>
		`);
	});*/

	app.get('/api/columns', function(req, res){

		if(publisherId = req.query['publisher-id']){
			// Get columns specified by publisher id localhost:3000/api/columns?publisher-1
			res.json(ColumnService.getPublisherColumns(publisherId));

		} else {
			// No query string : Get recent columns of all publisher e.g. on Index Page
			res.json(ColumnService.getRecentColumns(req.query['num-of-cols']));
		}
	});

};