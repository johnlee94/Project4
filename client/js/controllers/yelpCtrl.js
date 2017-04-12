// module.exports.get = require('./lib/get');
// module.exports.search = require('./lib/search');

//yelp-fusion api
// const yelp = require('yelp-fusion');
//
// // Place holders for Yelp Fusion's OAuth 2.0 credentials. Grab them
// // from https://www.yelp.com/developers/v3/manage_app
// const clientId = process.env.YELP_ID;
// const clientSecret = process.env.YELP_SECRET
//
// const searchRequest = {
//  term:'Four Barrel Coffee',
//  location: 'san francisco, ca'
// };
//
// yelp.accessToken(clientId, clientSecret).then(response => {
//  const client = yelp.client(response.jsonBody.access_token);
//
//  client.search(searchRequest).then(response => {
//    const firstResult = response.jsonBody.businesses[0];
//    const prettyJson = JSON.stringify(firstResult, null, 4);
//    console.log(prettyJson);
//  });
// }).catch(e => {
//  console.log(e);
// });




angular.module('myApp')
  .controller('yelpController', yelpController)

yelpController.$inject = ['$state', '$scope', '$http', '$localStorage']

function yelpController($state, $scope, $http, $localStorage) {
  var vm = this
  vm.selectedChallenge = {}
  vm.allChallenges = []
  vm.yelpSearch = yelpSearch
  vm.search = {}
  vm.selectLocation = selectLocation
  vm.isSelected = false
  vm.test = $localStorage.getObject('selectedChallenge')

  function selectLocation(selectedLocation) {
    for (var i = 0; i < vm.allChallenges.length; i++) {
      var location = vm.allChallenges[i]
      location.selected = false
      if(location.image_url == selectedLocation.image_url) {
        vm.selectedChallenge = location
        location.selected = !location.selected
        $localStorage.setObject('selectedChallenge', vm.selectedChallenge)
      } else {
        location.selected = false
      }
    }
  }

  function yelpSearch() {
    var searchTerm = vm.search.term,
        openNow    = vm.search.open
        price      = String(vm.search.price),
        zipSearch = vm.search.zip
        // zipSearch  = vm.search.zip === '' || vm.search.zip.length !== 5 ? '90401' : vm.search.zip;
        console.log('hello')
        console.log(vm.search)
        $http({
          url: 'http://localhost:3000/challenges/api',
          method: "GET",
          params: {term: searchTerm, location: zipSearch, open: openNow, price: price}
        })
        .then(function(res) {
          console.log(res.data.businesses)
          vm.allChallenges = res.data.businesses
        })
  }
  // the logged in user can be retrieved by reaching up to the MainController using the built-in $scope service.:
  vm.currentUser = $scope.$parent.currentUser
}

angular.module('myApp')
.factory('$localStorage', ['$window', function($window) {
    return {
      set: function(key, value) {
          $window.localStorage[key] = value;
          },
          get: function(key, defaultValue) {
            return $window.localStorage[key] || defaultValue;
          },
          setObject: function(key, value) {
            $window.localStorage[key] = JSON.stringify(value);
          },
          getObject: function(key) {
            return JSON.parse($window.localStorage[key] || '{}');
          }
        }
}])
