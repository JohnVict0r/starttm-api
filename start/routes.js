'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/


const Route = use('Route')

Route.get('/', () => {
  return { tip: 'Start TM API' }
})



Route.post("/register", "Auth/RegisterControlController.register");

Route.get('/users', 'UserController.index');
Route.get('/Persons', 'PersonController.index');
Route.get('/events', 'EventController.index');
