var json_file = '/search-docs.json';
var App = angular.module('searchApp', []);

App.controller('search', function($scope, $http) {

    $http.get( json_file ).then(
        function(post){
            $scope.query = {}
            $scope.posts = post.data;
            $scope.sort = "date"
        }
    );


});