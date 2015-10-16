var app = angular.module('juke', ['ui.router']);

app.config(function($urlRouterProvider, $locationProvider) {

	$urlRouterProvider.when('/', '/albums');

	$locationProvider.html5Mode({
  	enabled: true,
  	requireBase: false
	});


})