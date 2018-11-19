var express = require('express');
var todoController = require('./controllers/TodoController.js')
var app = express();

//set the view engine
app.set('view engine', 'ejs');

//set the static route
app.use(express.static('./public/'));

// initiate Controller
todoController(app);

//set the port number
app.listen(process.env.PORT || '5000');
console.log('Application started on port number 3000');

