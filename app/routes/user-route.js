// Express Route for Account & Profile Management, and Authentication
var Message = require('../content/en').Message

module.exports = function(app){
	function renderUserProfile(req, res){
		res.locals.message = req.flash('message');
		res.send('<html>user profile page of '+req.flash('hello')+req.params.username+
			'<br/><div style="border:1px solid black;">'+res.locals.message+
			'</div></html>')
	}

	//TODO: Check if the role is valid for this route
	function checkRole(req, res, next){
		next()
	}

	app.get('/users/:username', renderUserProfile)

	// TODO: Update member profile
	app.put('/users/:username', checkRole, function(req, res){
		req.flash('message', Message.User.UpdateProfileSucces)

		renderUserProfile(req, res);
	})

	//TODO : get user setting
	app.get('/users/:username/setting', function(req, res){
		res.send('<html>Setting of '+req.params.username+'</html>')
	})

	// -------------------- API ------------------------
	//TODO: get user jsons
	app.get('/api/users/:userId', function(req, res){
		res.json({userId: req.params.userId})
	})
}