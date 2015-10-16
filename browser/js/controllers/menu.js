app.controller('MenuCtrl', function ($scope, $rootScope, $location) {
	$scope.viewAlbums = function ($) {
		// $rootScope.$broadcast('changeView', {
		// 	name: 'allAlbums'
		// });
		// $state.go('albumList')
	};
	$scope.viewArtists = function () {
		$rootScope.$broadcast('changeView', {
			name: 'allArtists'
		});
	};

	//console.log($location.path());
});