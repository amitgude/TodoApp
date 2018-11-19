//var data = [{item : 'get milk'}, {item: 'code node js app'}];
var bodyParser = require('body-parser');
var urlencodeedParser = bodyParser.urlencoded({extended: false})
var mongoose = require('mongoose');


// Connect to database

mongoose.connect('mongodb://test:Ashwilla1@ds111050.mlab.com:11050/todo')


// Create a schema
var todoSchema = new mongoose.Schema({
    item: String
});
var Todo = mongoose.model('Todo', todoSchema);


module.exports = function(app){

    app.get('/todo', function(req,res){
        Todo.find({}, function(err, data){
            if(err) throw err;
            res.render('todo', {todos : data});
        });

    });

    app.post('/todo',urlencodeedParser, function(req,res){
        var newTodo = Todo(req.body).save(function(err, data){
           if(err) throw err;
           res.json(data);
        })

    });


    app.delete('/todo/:item', function(req,res){
        console.log('item : ' +req.params.item.replace(/ /g, '-'))
        Todo.find({item: req.params.item}).deleteOne(function(err, data){
            if(err) throw err;
            res.json(data);
        });
    });


}