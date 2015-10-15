app.controller('ArtistsCtrl', function ($scope, $rootScope, ArtistFactory) {
	ArtistFactory.fetchAll()
	.then(function (artists) {
		$scope.artists = artists;
	});
	// $rootScope.$on('changeView', function (evt, data) {
	// 	$scope.showMe = (data.name == 'allArtists');
	// });
	// $scope.viewArtist = function (artistId) {
	// 	$rootScope.$broadcast('changeView', {
	// 		name: 'oneArtist',
	// 		id: artistId
	// 	});
	// };
	
}).config(function ($stateProvider) {
    $stateProvider.state('artistList', {
        url: '/artists',
        templateUrl: '/artists.html',
        controller: 'ArtistsCtrl'
    });
});


