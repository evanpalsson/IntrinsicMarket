var app = angular.module('intrinsic', ['ngRoute', 'ngResource'])

	app.config(function($routeProvider, $locationProvider){

		// $locationProvider.html5Mode(true);
		$routeProvider
	  		.when('/', {
	  			templateUrl: '/main.html',
	  			controller: 'indexCtrl'	
	  		})
	  		.when('/statements', {
	  			templateUrl: '/statements.html'
	  		})
	  		.otherwise({
		  		redirectTo: '/'
		  	})

	});