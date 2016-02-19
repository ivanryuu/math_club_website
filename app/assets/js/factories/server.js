app.factory('server', ['$http', 
	function($http) {

	var urlBase = 'http://localhost:7588';
	var server = {};

	server.getEvents = function(past) {
		return $http.get(urlBase + '/events/date/' + past);
	}
	server.getOfficers = function() {
		return $http.get(urlBase + '/officers');
	}

	return server;
}]);