app.controller('ArtistsCtrl', function ($scope, $rootScope, ArtistFactory, artists) {
		$scope.artists = artists;
	
}).config(function ($stateProvider) {
    $stateProvider.state('artistList', {
        url: '/artists',
        templateUrl: '/artists.html',
        controller: 'ArtistsCtrl',
        resolve: {
        	artists: function(ArtistFactory) {
        		return ArtistFactory.fetchAll();
        	}
        }
    });
});


