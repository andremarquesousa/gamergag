var App = angular.module('App', ['ngRoute']);

App.config(function($locationProvider) {
    // use the HTML5 History API
    $locationProvider.html5Mode(true);
});

/*CONTROLLER*/
App.controller('MainController', function($scope, $http) {
    $http.get('../../data.json').
        then(function (data) {
            $scope.data = data.data.section;
        });

    $scope.limitWorld = 4;
    $scope.limitBrasil = 4;

    $scope.loadMore = function(items) {
        var increasedBrasil,
            increasedWorld,
            itemsLength = items.length;

        if (Object.values(items).indexOf('Brasil') > -1) {
            increasedBrasil = $scope.limitBrasil + 4;
            $scope.limitBrasil = increasedBrasil > itemsLength ? itemsLength : increasedBrasil;
        } else if (Object.values(items).indexOf('Mundo') > -1) {
            increasedWorld = $scope.limitWorld + 4;
            $scope.limitWorld = increasedWorld > itemsLength ? itemsLength : increasedWorld;
        }
    };

    $scope.class = "menu-closed";

    $scope.menu = function(){
        if ($scope.class === "menu-open")
            $scope.class = "menu-closed";
        else
            $scope.class = "menu-open";
    };
});