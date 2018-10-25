'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { tip: 'Start TM API' }
})

// Auth
Route.group(() => {

  // Singup
  Route.post("/singup", "Auth/SingupController.register");
  Route.get("/confirm-email/:token", "Auth/SingupController.confirm");

  // Auth
  Route.post("/login", "Auth/AuthController.login");

}).prefix('/auth');

Route.group(() => {


}).middleware("auth"); 

// Authentication
