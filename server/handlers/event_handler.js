var Event = require('./../models/event');

var EventHandler = {
	get: function(title, res) {
		if(!past) return this.list(res);
		Event.findOne({name: name}, function(err, events) {
			if(err) throw err;

			res.send(events);
			res.status(200).end();
		});
	},
	list: function(past, res) {
		var date = new Date();
		past = past == 'past';
		var query = past? { time: {$lte: date}} : {time: {$gte: date}};
		Event.find(query, function(err, events) {
			if(err) throw err;
			res.send(events);
			res.status(200).end();
		});
	},
	post: function(req, res) {
		var info = JSON.parse(req.body.info);
		console.log(info);
		var eventItem = new Event(info);
		eventItem.save(function(err) {
			if(err) throw err;
			res.send(eventItem);
			res.status(200).end();
		})
	}
}

module.exports = EventHandler;