const MongoClient = require('mongodb').MongoClient;

/*
   To start mongodb you will need to be in /mongo/bin and type
   ./mongod --dbpath ~/mongo-data in the terminal
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server.');

	// db.collection('Todos').insertOne({
	// 	text: 'Just keep coding',
	// 	completed: false
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert todo', err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });

	db.collection('Users').insertOne({
		name: 'BJ',
		age: 44,
		location: 'Washington'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert user', err);
		}
		console.log(result.ops);
	});

	db.close();
});