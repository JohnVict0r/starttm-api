'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { tip: 'Start TM API' }
})

Route.post("/registration/request", "Auth/RegisterControlController.requestUser");
Route.get("/registration/confirm/:token&:username", "Auth/RegisterControlController.confirmUser")

Route.get('/users', 'UserController.index');
Route.get('/persons', 'PersonController.index');
Route.get('/events', 'EventController.index');