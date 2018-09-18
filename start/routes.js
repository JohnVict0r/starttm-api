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

Route.get('/v1/', () => {
  return { greeting: 'Hello world in JSON, Is The First Version of API ;P' }
})

Route.get('/', () => {
  return { tip: 'Go to /v1 in URL' }
})
