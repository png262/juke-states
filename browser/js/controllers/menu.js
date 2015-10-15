app.controller('MenuCtrl', function ($scope, $rootScope) {
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
});