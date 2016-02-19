var Officer = require('./../models/officer');

var OfficerHandler = {
	get: function(name, res) {
		if(!name) return this.list(res);
		Officer.findOne({name: name}, function(err, officer) {
			if(err) throw err;

			res.send(officer);
			res.status(200).end();
		});
	},
	list: function(res) {
		Officer.find({}, function(err, officers) {
			if(err) throw err;
			res.send(officers);
			res.status(200).end();
		});
	},
	post: function(req, res) {
		var info = req.body.info;
		var officer = new Officer(info);
		officer.save(function(err) {
			if(err) throw err;
			console.log('user added');
		})
	}
}

module.exports = OfficerHandler;