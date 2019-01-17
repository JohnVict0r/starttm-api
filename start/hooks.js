const { hooks } = require('@adonisjs/ignitor');

console.log('hook');

hooks.before.httpServer(() => {});
