var app = angular.module('intrinsic', ['ui.router']);

	app.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '/statements.html'
			})
			.state('home.statements', {
				url: '/statements',
				templateUrl: '/statements.html'
			})

	});