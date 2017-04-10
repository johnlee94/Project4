angular.module('myApp')
  .directive('navBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/partials/nav-bar.html'
    }
  })
