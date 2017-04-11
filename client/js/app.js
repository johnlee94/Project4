var myApp = angular.module('myApp', ['ui.router'])

myApp.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginController as loginCtrl'
    })
    .state('logout', {
      url: '/logout',
      controller: 'logoutController'
    })
    .state('signup', {
      url: '/signup',
      templateUrl: 'templates/signup.html',
      controller: 'signupController as signupCtrl'
    })
    .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html',
      restricted: true
    })
    .state('challenges', {
      url: '/challenges',
      templateUrl: 'templates/challenges.html',
      controller: 'challengesController as challengesCtrl',
      restricted: true
    })
    .state('newChallenge', {
      url: '/challenges/new',
      templateUrl: 'templates/newChallenge.html',
      controller: 'challengesController as challengesCtrl',
      restricted: true
    })
})
