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

yelpController.$inject = ['$state', '$scope', '$http']

function yelpController($state, $scope, $http) {
  var vm = this
  vm.test = 'secret'
  vm.title = "Use Yelp masterrace..."
  vm.selectedChallenge = {}
  vm.allChallenges = [{
    location: "up yours"
  }]
  vm.yelpSearch = yelpSearch
  vm.search = {}
  vm.selectedCity = ''
  vm.cities = []

  function yelpSearch() {
    var searchTerm = vm.search.term,
        openNow    = vm.search.open === 'true' ? true : false,
        price      = String(vm.search.price),
        zipSearch = vm.search.zip
        // zipSearch  = vm.search.zip === '' || vm.search.zip.length !== 5 ? '90401' : vm.search.zip;
        console.log('hello')
        console.log(vm.search)
        $http({
          url: 'http://localhost:3000/challenges/api',
          method: "GET",
          params: {term: searchTerm, zip: zipSearch, open_now: openNow, price: price}
        })
        .then(function(res) {
          console.log(res.data.businesses)
          vm.allChallenges.push(res.data.businesses)
        })
  }

  // function yelpSearch(req, res) {
  //   var searchTerm = vm.search.term,
  //       openNow    = req.query.open === 'true' ? true : false,
  //       price      = String(req.query.price),
  //       zipSearch  = req.query.zip === '' || req.query.zip.length !== 5 ? '90401' : req.query.zip;
  //
  //   console.log('price:', price);
  //   yelp.search({term: searchTerm, categories: 'bars', location: zipSearch, open_now: openNow, price: price})
  //   .then(function (data) {
  //     var jsonString = JSON.parse(data);
  //     vm.allChallenges.push()
  //     res.render('search2', {bar: jsonString.businesses});
  //
  //   })
  //   .catch(function (err) {
  //       console.log('not working')
  //       console.error(err);
  //   });
  // }

  // function createChallenge () {
  //   // vm.newChallenge.user = currentUser._id
  //   $http
  //     .post('http://localhost:3000/challenges', vm.newChallenge)
  //     .then(function(res) {
  //       console.log(vm.newChallenge)
  //       vm.newChallenge = {}
  //       vm.challenges.push(res.data.challenge)
  //     })
  // }

  // the logged in user can be retrieved by reaching up to the MainController using the built-in $scope service.:
  vm.currentUser = $scope.$parent.currentUser
}
