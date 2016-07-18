var app = angular.module("personalApp", []);

app.controller("MyController", ['$scope', function($scope){
  $scope.view = {};
  $scope.view.portfolio = false;
  $scope.view.experience = false;
  $scope.view.education = false;
  $scope.view.skills = false;
  $scope.view.about = false;
}]);
