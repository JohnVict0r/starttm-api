'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { tip: 'Start TM API' }
})

Route.post("/register", "Auth/RegisterControlController.register");
Route.get("/register/confirm/:token&:username", "Auth/RegisterControlController.confirmEmail")

Route.get('/users', 'UserController.index');
Route.get('/Persons', 'PersonController.index');
Route.get('/events', 'EventController.index');


