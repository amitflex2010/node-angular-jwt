

var express = require('express'),
app = express();
var jwt = require('jsonwebtoken');

var config = require('../../config');
app.set('superSecret', config.secret);

var alltask = {
	"widget": {
		"header": "SVG Viewer",
		"items": [{
				'id': 1, "name": "Sample Konfabulator Widget1"
			},
			{
				'id': 2, "name": "Sample Konfabulator Widget2"
			},

			{
				'id': 3, "name": "Sample Konfabulator Widget3"
			},
			{
				'id': 4, "name": "Sample Konfabulator Widget4"
			},
			{
				'id': 5, "name": "Sample Konfabulator Widget5"
			}

		]
	}
};
exports.list_all_tasks = function(req, res) {

    var authHeader = req.headers.authorization;
    if(authHeader != undefined)
    {
        var token = authHeader.split('Bearer ')[1];
    
            if (token) {
                
                    // verifies secret and checks exp
                    jwt.verify(token, app.get('superSecret'), function(err, decoded) {      
                    if (err) {
                        return res.json({ success: false, message: 'Failed to authenticate token.' });    
                    } else {
                        // if everything is good, save to request for use in other routes
                        req.decoded = decoded;    
                        res.json({ success:true, status:200,  data: (alltask) });
                    }
                    });
                
                }
            
            else {
                res.json({ success: false, message: 'Unauthorized request.' });
            }
        }
        else
        {
            res.json({ success: false, message: 'Unauthorized request.' });
        }
};

 

var createtask = "{'widget': {'debug': 'on', 'window': {'title': 'Sample Konfabulator Widget','name':'main_window','width': 500,'height': 500},'type':'Create task'}";
exports.create_a_task = function(req, res) {

 if (req.headers.get('Authorization') === 'Bearer fake-jwt-token') {
 }
 else {
    res.json(createtask);
 }
                   
   
};

var readtask = "{'widget': {'debug': 'on', 'window': {'title': 'Sample Konfabulator Widget','name':'main_window','width': 500,'height': 500},'type':'read task'}";
exports.read_a_task = function(req, res) {
    res.json(readtask);
};

var updatetask = "{'widget': {'debug': 'on', 'window': {'title': 'Sample Konfabulator Widget','name':'main_window','width': 500,'height': 500},'type':'update task'}";
exports.update_a_task = function(req, res) {
    res.json(updatetask);
};

var deletetask = { message: 'Task successfully deleted' };
exports.delete_a_task = function(req, res) {

res.json(deletetask);
};

var login_user = { user: 'Amitr', pwd:'qer', admin: 'admin' };
exports.doLogin = function(req, res) {
    name = req.body.username;
    passwrd = req.body.password;

    if(login_user.user == name && login_user.pwd == passwrd)
    {
        const payload = {
            admin: login_user.admin 
          };
              var token = jwt.sign(payload, app.get('superSecret'), {
                expiresIn: 86400 // expires in 24 hours
              });
      
              // return the information including token as JSON
              res.json({
                success: true,
                message: 'Login Success',
                user: login_user.user,
                token: token
              });
    }
    else{
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
    }


};

var register_task = { message: 'Registered' };
exports.doRegister = function(req, res) {

res.json(register_task);
};


