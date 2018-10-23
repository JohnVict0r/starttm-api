'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { tip: 'Start TM API' }
})

// Registration
Route.post("/registration/request", "Auth/RegistrationController.requestUser");
Route.get("/registration/confirm/:token&:username", "Auth/RegistrationController.confirmUser");

Route.group(() => {


}).middleware("auth"); 

// Authentication
Route.post("/login", "Auth/AuthenticationController.login");