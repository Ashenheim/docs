var json_file = '/all-docs.json';

var App = angular.module('docsList', []);

App.controller('docs', function($scope, $http) {

    $http.get( json_file ).then(
        function(post){
            $scope.query = {}
            $scope.queryBy = '$'
            $scope.posts = post.data;
            $scope.sort = "date"
        }
    );

});