angular.module('app')
    .controller('list', ['$scope','$http',
        function ($scope,$http) {
            $http
                .get('data/phones.json')
                .then(function(data){
                    $scope.phoneLists=data.data;
                })
        }
    ])


