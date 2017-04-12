angular.module('myApp')
  .controller('challengesController', challengesController)

challengesController.$inject = ['$state', '$scope', '$http', '$localStorage']

function challengesController($state, $scope, $http, $localStorage) {
  var vm = this
  vm.title = "All of the challenges!"
  vm.selectedChallenge = $localStorage.getObject('selectedChallenge')
  // vm.stage = $localStorage.getObject('selectedChallenge')
  // vm.selectedChallenge = JSON.parse(stage)
  vm.newChallenge = {}
  vm.selectedAddress = vm.selectedChallenge.location.display_address[0] + ", " +  vm.selectedChallenge.location.display_address[1]
  vm.challenges = []
  vm.createChallenge = createChallenge

  function createChallenge () {
    // vm.newChallenge.user = currentUser._id
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
