const Route = use('Route');

Route.get('/', () => 'Hello World');

// Subscription
Route.post('/subscriptions', 'Auth/SubscriptionController.store');

// Confirmation
Route.get('/confirmations/:token', 'Auth/ConfirmationController.show');

// User
Route.resource('users', 'UserController').only(['show', 'index']);

// People
Route.resource('users.people', 'PersonController')
  .apiOnly()
  .except(['destroy']);

// Arbiter
Route.resource('users.arbiters', 'ArbiterController')
  .apiOnly()
  .except(['destroy', 'update']);

// Athlete
Route.resource('users.athletes', 'AtheteController')
  .apiOnly()
  .except(['update', 'destroy']);

// Federation
Route.resource('federations', 'FederationController').apiOnly();

// Role
Route.resource('users.roles', 'RoleController')
  .apiOnly()
  .except(['update', 'destroy']);

// Tournament
Route.resource('tournaments', 'TournamentController').apiOnly();

// Club
Route.resource('clubs', 'ClubController').apiOnly();
