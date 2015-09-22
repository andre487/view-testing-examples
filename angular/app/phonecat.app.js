/**
 * @file
 * Main JS file that connects all the components together
 */
var phonecatApp = angular.module('phonecatApp', ['ngRoute']);

phonecatApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
        controller: 'PhoneListCtrl',
        templateUrl: '/angular/app/phonecat.template.html'
    });
}]);
