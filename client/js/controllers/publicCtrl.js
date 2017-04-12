angular.module('myApp')
  .controller('publicController', publicController)

publicController.$inject = ['$state', '$scope', '$http', '$localStorage']

function publicController($state, $scope, $http, $localStorage) {
  var vm = this
  vm.allChallenges = []
  vm.passChallengeId = passChallengeId
  vm.getAllChallenges = getAllChallenges

  function getAllChallenges() {
    $http
        .get('http://localhost:3000/challenges')
        .then(function(res) {
          console.log(res.data.challenges)
          vm.allChallenges = res.data.challenges
        })
}
getAllChallenges()

  function passChallengeId(challenge) {
    $localStorage.setObject('challenge', {challenge : challenge})
  }
}
