var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
  	text: req.body.text
  });

  todo.save().then((doc) => {
	res.send(doc);
  }, (e) => {
	res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({todos});
	}, (e) => {
		res.status(400).send(e);
	});
});

app.listen(3001, () => {
	console.log('Started on port 3001');
});

module.exports = {app};

// var Todo = mongoose.model('Todo', {
// 	text: {
// 		type: String,
// 		required: true,
// 		minlength: 1,
// 		trim: true
// 	},
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type: Number,
// 		default: null
// 	}
// });

// var newTodo = new Todo({
// 	text: 'Cook Dinner'
// });

// var newTodo = new Todo({
// 	text: 'Cook Lunch',
// 	completed: true,
// 	completedAt: 234567
// });

// newTodo.save().then((doc) =>{
// 	console.log('BOO-Yah!! Item saved', doc);
// }, (e) => {
//     console.log('Nope!! Did not save your item.')	
// }); 