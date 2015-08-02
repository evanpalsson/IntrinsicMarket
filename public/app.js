var app = angular.module('intrinsic', ['ngRoute'])

	app.config(function($routeProvider){

		$routeProvider
	  		.when('/', {
	  			templateUrl: '/main.html',
	  			controller: 'indexCtrl'	
	  		})
	  		.when('/main', {
	  			templateUrl: '/test.html'
	  		})
	  		.otherwise({
		  		redirectTo: '/'
		  	})

	});