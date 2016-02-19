app.factory('server', ['$http', 
	function($http) {

	var urlBase = 'http://localhost:7588';
	var server = {};

	server.getEvents = function() {
		return $http.get(urlBase + '/events');
	}
	server.getOfficers = function() {
		return $http.get(urlBase + '/officers');
	}

	return server;
}]);