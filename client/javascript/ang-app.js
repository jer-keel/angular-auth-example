var app = angular.module("auth-angular", ["ngRoute"]);

// Configure routes for this application
app.config(["$routeProvider", "$locationProvider", 
  function($routeProvider, $locationProvider) {
    $routeProvider.when("/", {
      templateUrl: "/html/home.html",
      controller: "HomeController"
    }).otherwise({
      redirectTo: "/"
    });
}]);

// This controll controls the home page!!!
app.controller("HomeController", ["$scope", "$location", "$http",
  function($scope, $location, $http) {
    $scope.login = function(){
      $http.get("/auth/github");
    }
  }
]);

// Simple logging to make sure everything loaded correctly
console.log("Angular has been loaded!");
