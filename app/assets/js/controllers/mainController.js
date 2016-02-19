app.controller('MainCtrl',
	['$rootScope','$scope', 'server',
	function($rootScope, $scope, server) {
		$rootScope.pageType = 'homepage';

		function loadOfficers() {
			server.getOfficers().then(function(result) {
				$scope.officers = result.data;
				console.log($scope.officers);
			});
		}

		function init(){
			loadOfficers();
		}
		init();
	}]);