app.controller('EventsCtrl',
	['$rootScope','$scope', 'server',
	function($rootScope, $scope, server) {
		$rootScope.pageType = 'left-sidebar';

		function loadEvents() {
			server.getEvents().then(function(result) {
				$scope.events = result.data;
			});
		}

		function init() {
			loadEvents();
		}
		init();
	}]);