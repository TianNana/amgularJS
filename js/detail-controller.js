angular.module('app')
    .controller('detail', ['$scope','$routeParams','$http',
        function($scope,$routeParams,$http){
            var name=$routeParams.id;
            $http
                .get('/data/'+name+'.json')
                .then(function(data){
                    console.log(data);
                    $scope.phone=data.data;
                });
        }
    ])

