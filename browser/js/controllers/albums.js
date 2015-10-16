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

// could put the config / stateprovider in seperate file, links to it through the controller line. Will need to include the script tag to this file in index.html