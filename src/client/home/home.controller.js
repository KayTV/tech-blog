angular.module('app')
.controller('HomeController', ['$scope', 'httpFactory', 'authFactory', function($scope, httpFactory, authFactory){
  $scope.title = 'BLOG';

}]);
