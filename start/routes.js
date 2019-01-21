const Route = use('Route');

Route.get('/', () => 'Hello World');

// Subscription
Route.post('/subscriptions', 'Auth/SubscriptionController.store');

// Confirmation
Route.get('/confirmations/:token', 'Auth/ConfirmationController.show');

// User
Route.resource('users', 'UserController').only(['show', 'index']);

// People
Route.resource('people', 'PersonController')
  .apiOnly()
  .except(['destroy'])
  .validator(new Map([[['people.store'], ['People/Store']]]));
// Arbiter
Route.resource('arbiters', 'ArbiterController')
  .apiOnly()
  .except(['destroy', 'update']);

// Athlete
Route.resource('athletes', 'AthleteController')
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
