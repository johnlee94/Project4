angular.module('myApp')
  .controller('challengesController', challengesController)

challengesController.$inject = ['$state', '$scope']

function challengesController($state, $scope) {
  var vm = this
  vm.title = "All of the challenges!"

  // the logged in user can be retrieved by reaching up to the MainController using the built-in $scope service.:
  vm.currentUser = $scope.$parent.currentUser
}
