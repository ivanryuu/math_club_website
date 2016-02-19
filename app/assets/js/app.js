'use strict';

var app = angular.module('myApp', [
  'ngRoute'
]);

app.config(['$routeProvider', function($routeProvider) {
  	$routeProvider
  	.when('/main', {
  		templateUrl: 'views/main.html',
  		controller: 'MainCtrl'
  	})
  	.when('/events', {
  		templateUrl: 'views/events.html',
  		controller: 'EventsCtrl'
  	})
  	.when('/announcements', {
  		templateUrl: 'views/announcements.html',
  		controller: 'AnnouncementsCtrl'
  	})
  	.otherwise({redirectTo: '/main'});
}]);