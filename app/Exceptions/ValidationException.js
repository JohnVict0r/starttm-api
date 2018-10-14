'use strict'

const { LogicalException } = require('@adonisjs/generic-exceptions')

class ValidationException extends LogicalException {

  handle(error, { response }) {

    let message = error.errors[Object.keys(error.errors)[0]].message;

    response.status(400).send('Bad Request: ' + message);
    
  }
}

module.exports = ValidationException
