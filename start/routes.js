const Route = use('Route');

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

// Address
Route.resource('people.address', 'AddressController').only(['update']);
