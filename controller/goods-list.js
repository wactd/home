var appMod = angular.module('myApp', ['ngRoute']);
appMod.controller('listContrl', ['$scope', '$window', '$http', function ($scope, $window, $http) {

    $scope.listData = [];

    $scope.init = function () {
        for (var i = 0; i < 10; i++) {
            var row = {id: i, name: 'name' + i, age: (i + 1) * 2};
            $scope.listData.push(row);
        }
    }
    $scope.init();

    $scope.del = function (item) {
        angular.forEach($scope.listData, function (data, index, array) {
            if (data == item) {
                $scope.listData.splice(index, 1);
                return;
            }
        })
    }

}])