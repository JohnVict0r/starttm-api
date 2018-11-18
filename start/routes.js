'use strict'

const Route = use('Route')

// Auth
Route.group(() => {

  // Singup
  Route.post("/signup", "Auth/SignupController.register");
  Route.get("/confirm-email/:token", "Auth/SignupController.confirm");

});

// User
Route.resource('users', 'UserController').only('index');

// Person
Route.resource('people', 'PersonController')
  .apiOnly()
  .except(['index', 'destroy']);