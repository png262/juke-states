app.controller('ArtistCtrl', function ($scope, $rootScope, PlayerFactory, ArtistFactory, $stateParams) {
	
	// $rootScope.$on('changeView', function (evt, data) {
	// 	if (data.name == 'oneArtist') {
	// 		$scope.showMe = true;

	// 	} else {
	// 		$scope.showMe = false;
	// 	}
	// });


	ArtistFactory.fetchById($stateParams.artistId)
	.then(function (artist) {
		$scope.artist = artist;
	});
	// $scope.viewAlbum = function (albumId) {
	// 	$rootScope.$broadcast('changeView', {
	// 		name: 'oneAlbum',
	// 		id: albumId
	// 	});
	// };

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.artist.songs);
	};

}).config(function ($stateProvider) {
    $stateProvider
    .state('artist', {
        url: '/artists/:artistId',
        templateUrl: '/artist.html',
        controller: 'ArtistCtrl'
    })
    .state('artist.albums', {
    	url: '/albums',
    	templateUrl: 'artist-albums.html'
    })
    .state('artist.songs', {
    	url: '/songs',
    	templateUrl: 'artist-songs.html'
    })
})