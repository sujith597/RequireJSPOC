define([], function () {
    'use strict';
    
    var myController = function ($scope) {
        $scope.message = "This is test message";
    };
    myController.$inject = ['$scope'];

    return myController;
});