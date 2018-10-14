'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

const ValidationException = use('App/Exceptions/ValidationException');
const NotFoundException = use('App/Exceptions/NotFoundException');


class ExceptionHandler extends BaseExceptionHandler {

  async handle(error, { request, response }) {

    switch (error.name) {
      case "ValidationError":
        new ValidationException().handle(error, { request, response });
        break;
      case "NotFoundException":
        new NotFoundException().handle(error, { request, response });
        break;
      default:
        response.status(error.status).send(error.message);
        break;
    }
  }


  async report(error, { request }) {
  }
}

module.exports = ExceptionHandler