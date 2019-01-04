'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class UniqueResourceException extends LogicalException {
  /**
   * Handle this exception by itself
   */
  // handle () {}
}

module.exports = UniqueResourceException
