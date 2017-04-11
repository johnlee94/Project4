angular.module('myApp')
  .controller('challengesController', challengesController)

challengesController.$inject = ['$state', '$scope', '$http']

function challengesController($state, $scope, $http) {
  var vm = this
  vm.title = "All of the challenges!"
  vm.newChallenge = {}
  vm.challenges = []
  vm.createChallenge = createChallenge

  function createChallenge () {
    $http
      .post('http://localhost:3000/challenges', vm.newChallenge)
      .then(function(res) {
        console.log(vm.newChallenge)
        vm.newChallenge = {}
        vm.challenges.push(res.data.challenge)
      })
  }

  // the logged in user can be retrieved by reaching up to the MainController using the built-in $scope service.:
  vm.currentUser = $scope.$parent.currentUser
}
