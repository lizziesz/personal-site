var app = angular.module("personalApp", ['ngAnimate']);

app.controller("MyController", ['$scope', function($scope){
  $scope.view = {};
  $scope.view.portfolio = false;
  $scope.view.experience = false;
}]);
