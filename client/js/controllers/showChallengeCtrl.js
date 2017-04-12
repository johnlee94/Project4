angular.module('myApp')
  .controller('showChallengeController', showChallengeController)

showChallengeController.$inject = ['$state', '$scope', '$http', '$localStorage']

function showChallengeController($state, $scope, $http, $localStorage) {
  var vm = this
  vm.getChallenge = getChallenge
  vm.challenge = $localStorage.getObject('challenge')

  // getChallenge()
}

// http request for getting a challenge by Id from server, unnecessary when we can pass challenge object from Front End
function getChallenge() {
  var challengeId = $localStorage.getObject('challenge')
  console.log(challengeId)
   $http
    .get('http://localhost:3000/challenges/' + challengeId)
    .then(function(res) {
      console.log(res.data.challenge)
      vm.challenge = res.data.challenge
    })
}
