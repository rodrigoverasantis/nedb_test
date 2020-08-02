const Datastore = require("nedb");
const db = {};
db.users = new Datastore("./collections/users.json");
db.robots = new Datastore("./collections/robots.json");

db.users.loadDatabase();
db.robots.loadDatabase();

var doc = {
	hello: "world",
	n: 5,
	today: new Date(),
	nedbIsAwesome: true,
	notthere: null,
	notToBeSaved: undefined,
	fruits: ["apple", "orange", "pear"],
	infos: {
		name: "nedb"
	}
};

db.users.insert(doc, function (error, document) {
	if (error) {
		console.error(error);
	} else {
		console.log(document);
	}
});

db.users.find({}, function (error, documents) {
	if (error) {
		console.error(error);
	} else {
		console.log(documents);
	}
});