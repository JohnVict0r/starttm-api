'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

const { ValidationEx, CastEx } = use('App/Exceptions');

class ExceptionHandler extends BaseExceptionHandler {

  async handle(error, { request, response }) {

    if (['E_INVALID_JWT_TOKEN', 'E_ROUTE_NOT_FOUND'].includes(error.code)) return response.status(error.status).send(error.message);

    else if (error.name == 'ValidationError') return new ValidationEx().handle(error, { request, response });

    else if (error.name == 'CastError') return new CastEx().handle(error, { request, response });

    return response.send(error.stack);
  }


  async report(error, { request }) {
  }
}

module.exports = ExceptionHandler