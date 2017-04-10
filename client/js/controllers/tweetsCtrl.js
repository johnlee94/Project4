angular.module('myApp')
  .controller('tweetsController', tweetsController)

tweetsController.$inject = ['$state', '$scope']

function tweetsController($state, $scope) {
  var vm = this
  vm.title = "All of the tweets!"

  // the logged in user can be retrieved by reaching up to the MainController using the built-in $scope service.:
  vm.currentUser = $scope.$parent.currentUser
}
