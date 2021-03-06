app.controller('ArtistCtrl', function ($scope, $rootScope, PlayerFactory, ArtistFactory, $stateParams, artist) {
	
	$scope.artist = artist;


	$scope.isCurrent = function (song) {
		var current = PlayerFactory.getCurrentSong();
		return current && current._id == song._id;
	};
	$scope.start = function (song) {
		PlayerFactory.start(song, $scope.artist.songs);
	};

}).config(function ($stateProvider,$urlRouterProvider) {

    $stateProvider
    .state('artist', {
        url: '/artists/:artistId',
        templateUrl: '/artist.html',
        controller: 'ArtistCtrl',
        resolve: {
        	artist: function(ArtistFactory, $stateParams) {
        		return ArtistFactory.fetchById($stateParams.artistId); // won't see errors reported. may be good to wrap this in a try/catch block
        	}
        }
    })
    .state('artist.albums', {
    	url: '/albums',
    	templateUrl: 'artist-albums.html' // this child can use the information resolved from the parent if we need to, in its own controller. Then we could reuse the albums.html template
        /*
            controller: function ($scope, artist){
                $scope.albums = artist.albums;
            }
        */
    })
    .state('artist.songs', {
    	url: '/songs',
    	templateUrl: '/artist-songs.html'
    })


})
// .config(function($urlRouterProvider, $stateProvider) {
// 	$urlRouterProvider.when('/artists/:artistId', '/artists/:artistId/songs')
// })