"use strict";

const Route = use("Route");

// Auth
Route.group(() => {
  // Singup
  Route.post("/signup", "Auth/SignupController.register");
  Route.get("/confirm-email/:token", "Auth/SignupController.confirm");
});

// User
Route.resource("users", "UserController").only(["show", "index"]);

// People
Route.resource("users.people", "PersonController")
  .apiOnly()
  .except(["destroy"]);

// Arbiter
Route.resource("users.arbiters", "ArbiterController")
  .apiOnly()
  .except(["destroy", "update"]);

// Address
Route.resource("people.address", "AddressController").only(["update"]);