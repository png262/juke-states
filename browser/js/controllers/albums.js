app.controller('AlbumsCtrl', function ($scope, $rootScope, AlbumFactory, albums) {

	$scope.albums = albums;

	

}).config(function ($stateProvider) {
    $stateProvider.state('albumList', {
        url: '/albums',
        templateUrl: '/albums.html',
        controller: 'AlbumsCtrl',
        resolve: {
        	albums: function(AlbumFactory) {
        		return AlbumFactory.fetchAll();
        	}
        }
    });
});