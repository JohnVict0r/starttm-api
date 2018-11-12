'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { tip: 'Start TM API' }
})

// Auth
Route.group(() => {

  // Singup
  Route.post("/signup", "Auth/SignupController.register");
  Route.get("/confirm-email/:token", "Auth/SignupController.confirm");

});


Route.group(() => {


});