

const { LogicalException } = require('@adonisjs/generic-exceptions');

class CastException extends LogicalException {
  handle(error, { response }) {
    response.status(400).send(error);
  }
}

module.exports = CastException;
