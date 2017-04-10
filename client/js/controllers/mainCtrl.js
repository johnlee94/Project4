angular.module('myApp')
  .controller('MainController', MainController)

MainController.$inject = ['$scope', '$rootScope', '$state', 'UserService']

function MainController($scope, $rootScope, $state, UserService) {
  // Whenever state changes, set vm.currentUser to whatever 'current user' is received from server.
  // then, if the state user wants to go to is restricted and user is not logged in,
  // redirect to the login state:
  $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
    UserService.getUserStatus()
    .then(function(data){
      $scope.currentUser = data.data.user
      if (toState.restricted && !UserService.isLoggedIn()){
        $state.go('login');
      }
    })
  })
}
