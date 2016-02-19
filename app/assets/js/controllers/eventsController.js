app.controller('EventsCtrl',
	['$rootScope','$scope', 'server',
	function($rootScope, $scope, server) {
		$rootScope.pageType = 'left-sidebar';

		function loadEvents() {
			server.getEvents().then(function(result) {
				$scope.upcomingEvents = result.data;
			});

			server.getEvents('past').then(function(result) {
				$scope.pastEvents = result.data;
			})
		}

		function init() {
			loadEvents();
		}
		init();
	}]);