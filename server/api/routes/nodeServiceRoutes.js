
'use strict';
module.exports = function(app, express) {
var todoList = require('../controllers/nodeServiceController');
var apiRoutes = express.Router(); 
 
apiRoutes.get('/', function(req, res) {
    res.json({ message: 'Welcome to the coolest API on earth!' });
});
apiRoutes.get('/tasks', todoList.list_all_tasks);
apiRoutes.post('/tasks', todoList.create_a_task);


apiRoutes.get('/tasks/:taskId', todoList.read_a_task)
apiRoutes.put('/tasks/:taskId', todoList.update_a_task)
apiRoutes.delete('/tasks/:taskId', todoList.delete_a_task);


apiRoutes.post('/login', todoList.doLogin)
apiRoutes.post('/login', todoList.doRegister); 

app.use('/api',apiRoutes);
};