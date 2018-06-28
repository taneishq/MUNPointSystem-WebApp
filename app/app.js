'use strict';

// Declare app level module which depends on views, and components
angular.module('pointsystem', [
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);
app.controller('maincontroller', function($scope) {
  alert ("controller is up");
});