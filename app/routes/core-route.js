//var React = require('react'),
	//HomePage = React.createFactory(require('./HomePage.jsx'));
var ReactDOMServer = require('react-dom/server'),
	React = require('react'),
	//HomePage = React.createFactory(require('./HomePage.jsx'));
	//{Main} = require('publisherWeb');
	Main = React.createFactory(require('publisherWeb/src/app/components/main'));
	//console.log(require('publisherWeb/src/app/components/main'));

module.exports = function(app) {

	app.get('/test-component', function(req, res){
		// React.renderToString takes your component
    	// and generates the markup
		var reactHtml = ReactDOMServer.renderToString(new Main(), {});
	    // Output html rendered by react
		//console.log(reactHtml);
    	res.render('layout.ejs', {reactOutput: reactHtml, meta: {title: 'Index Page'}});
	});
};