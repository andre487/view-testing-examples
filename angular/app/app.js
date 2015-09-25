/**
 * @file
 * Main JS file that connects all the components together
 */
angular.module('phonecatApp', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            controller: 'PhoneListCtrl',
            templateUrl: '/angular/app/templates/catalog.html'
        });
    }]);
