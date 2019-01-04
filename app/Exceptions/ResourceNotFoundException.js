const { LogicalException } = require('@adonisjs/generic-exceptions');

class ResourceNotFoundException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
}

module.exports = ResourceNotFoundException;
