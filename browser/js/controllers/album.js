app.controller('AlbumCtrl', function ($scope, $rootScope, PlayerFactory, AlbumFactory, $stateParams, album,$location) {

	$scope.album = album;

	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.album.songs);
	};
	$scope.link = $location.absUrl();


}).config(function ($stateProvider) {
    $stateProvider.state('album', {
        url: '/albums/:albumId',
        templateUrl: '/album.html',
        controller: 'AlbumCtrl',
        resolve: {
        	album: function(AlbumFactory,$stateParams) {
        		return AlbumFactory.fetchById($stateParams.albumId);
        	}
        }
    });
});