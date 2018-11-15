'use strict'

const BaseExceptionHandler = use('BaseExceptionHandler')

class ExceptionHandler extends BaseExceptionHandler {

  async handle(error, { request, response }) {

    error.handle(error, { request, response });

  }


  async report(error, { request }) {
  }
}

module.exports = ExceptionHandler