angular.module('app')
    .config(['$routeProvider',
        function ($routeProvider) {
                $routeProvider
                    .when('/',{
                            templateUrl:'/list.html',
                            controller:'list'
                    })
                    .when ('/detail/:id',{
                            templateUrl:'/detail.html',
                            controller:'detail'
                    })
        }
    ])