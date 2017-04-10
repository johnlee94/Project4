angular.module('myApp')
.controller('loginController', loginController)
.controller('logoutController', logoutController)
.controller('signupController', signupController)

loginController.$inject = ['$state', 'UserService']
logoutController.$inject = ['$state', 'UserService']
signupController.$inject = ['$state', 'UserService']

// LOGIN CONTROLLER:
function loginController($state, UserService) {
  var vm = this
  vm.login = function () {

    // initial values
    vm.error = false
    vm.disabled = true

    // call login from service
    UserService.login(vm.loginForm.username, vm.loginForm.password)
      // handle success
      .then(function () {
        console.log("Successful login...")
        $state.go('profile')
        vm.disabled = false
        vm.loginForm = {}
      })
      // handle error
      .catch(function () {
        console.log("Whoops...")
        vm.error = true
        vm.errorMessage = "Invalid username and/or password"
        vm.disabled = false
        vm.loginForm = {}
      })
  }
}


// LOGOUT CONTROLLER:
function logoutController($state, UserService) {
  var vm = this

  // call logout from service
  UserService.logout()
    .then(function () {
      $state.go('login')
    })
}

// SIGNUP CONTROLLER:
function signupController($state, UserService) {
  var vm = this
  vm.signup = function () {

    // initial values
    vm.error = false
    vm.disabled = true

    // call register from service
    UserService.signup(vm.signupForm.username, vm.signupForm.password)
      // handle success
      .then(function () {
        $state.go('profile')
        vm.disabled = false
        vm.signupForm = {}
      })
      // handle error
      .catch(function () {
        vm.error = true
        vm.errorMessage = "Something went wrong!"
        vm.disabled = false
        vm.signupForm = {}
      })
  }
}
