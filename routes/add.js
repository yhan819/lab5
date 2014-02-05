var data = require("../data.json");

exports.addFriend = function(req, res) {    
	res.render("add");
	var name = req.query.name;
	var desc = req.query.description;
	var newFriend = {};
	newFriend["imageURL"] = "http://lorempixel.com/400/400/people";
	newFriend["name"] = name;
	newFriend["description"] = desc;
	console.log(newFriend);
	data["friends"].push(newFriend);
 }