app.controller('AlbumCtrl', function ($scope, $rootScope, PlayerFactory, AlbumFactory, $stateParams) {

	AlbumFactory.fetchById($stateParams.albumId)
	.then(function (album) {
		$scope.album = album;
	});

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};



	// $rootScope.$on('changeView', function (evt, data) {
	// 	if (data.name == 'oneAlbum') {
	// 		$scope.showMe = true;
	// 		AlbumFactory.fetchById(data.id)
	// 		.then(function (album) {
	// 			$scope.album = album;
	// 		});
	// 	} else {
	// 		$scope.showMe = false;
	// 	}
	// });

}).config(function ($stateProvider) {
    $stateProvider.state('album', {
        url: '/albums/:albumId',
        templateUrl: '/album.html',
        controller: 'AlbumCtrl'
    });
});