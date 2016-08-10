var User  = require('./models/user.js');

module.exports = function(router) {

    //middle ware service status
    router.use(function(req, res, next) {
        console.log('service is working');
        next();
    });

    router.get('/', function(req, res) {
        res.json({ message: 'welcome to likeme-api' });
    });

    router.route('/users')

        .get(function(req, res) {
            User.find(function(err, users) {
                if (err)
                    res.send(err);

                res.json(users);
            });
        });

    router.route('/users/id?:_id')

        .get(function(req, res) {
                User.findById(req.params._id, function(err, id) {
                    if (err)
                        res.send(err);
                    res.json(id);
                    console.log('req user.__id');
                });
            });

    router.route('/users/email?:email')

        .get(function(req, res) {
            User.findOne(req.param.email,function(err,email){
                if(err)
                    res.send(err);
                res.json(email);
                console.log('req user.email');
            });
        });

    router.route('/users/fbid?:fbid')

        .get(function(req, res) {
            User.findOne(req.param.fbid,function(err,fbid){
                if(err)
                    res.send(err);
                res.json(fbid);
                console.log('req user.fbid');
            });
        });
// route with parameters (http://localhost:8080/hello/:name)

var myCallback = function(data) {
  console.log('got data: '+data);
};

var usingItNow = function(callback) {
  callback('get it?');
};

usingItNow(myCallback);

}