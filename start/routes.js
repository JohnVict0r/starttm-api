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
Route.resource('users.athletes')
  .apiOnly()
  .except(['update', 'destroy']);

// Address
Route.resource('people.addresses', 'AddressController').only(['update']);

// Roles
Route.resource('users.roles', 'RoleController')
  .apiOnly()
  .except(['update']);
