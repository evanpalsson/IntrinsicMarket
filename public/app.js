var app = angular.module('intrinsic', ['ngRoute'])

	app.config(function($routeProvider){

		$routeProvider
	  		.when('/', {
	  			templateUrl: '/index.html',
	  			controller: 'indexCtrl'	
	  		})

	});