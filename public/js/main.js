var app = angular.module('app', ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider.when('/home', {
        template: `
                    <div ng-controller="homeController">
                        <h1>{{tit}}</h1>
                    </div>`,
        controller: 'homeController'
    });
    $routeProvider.when('/full', {
        template: `
                    <div ng-controller="fullController">
                    <h1>{{tit}}</h1>
                    <h2>{{content}}</h2>

                    </div>`,
        controller: 'fullController'
    });
    $routeProvider.when('/top', {
        template: `
                    <div ng-controller="topController">
                    <h1>{{tit}}</h1>
                    </div>`,
        controller: 'fullController'
    });
});
app.controller('homeController',
    function homeController($scope) {

        $scope.tit = 'Главная страница';
    }
)
app.controller('fullController',
    function homeController($scope, $http) {
        $http.get("qwewq.qwer")
            .then(function(response) {
                //First function handles success
                $scope.content = response.data;
            }, function(response) {
                //Second function handles error
                $scope.content = "Something went wrong";
            });
        $scope.tit = 'full';
    }
)
app.controller('topController',
    function homeController($scope) {

        $scope.tit = 'top';
    }
)