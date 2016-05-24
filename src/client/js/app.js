angular.module('app', ['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeController'
    })
    .when('/newpost', {
      templateUrl: 'newpost/newpost.html',
      controller: 'NewpostController'
    })
    .when('/register', {
      templateUrl: 'auth/register/register.html',
      controller: 'RegisterController'
    })
    .when('/login', {
      templateUrl: 'auth/login/login.html',
      controller: 'LoginController'
    })
    .when('/logout', {
      controller: 'LogoutController'
    })

    .otherwise({redirectTo: '/'});
  });
