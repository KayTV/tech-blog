angular.module('app')
.controller('NewpostController', ['$scope', 'httpFactory', 'authFactory', function($scope, httpFactory, authFactory){
  $scope.title = 'BLOG';

}]);
