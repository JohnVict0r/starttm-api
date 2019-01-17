const BaseExceptionHandler = use('BaseExceptionHandler');

const Env = use('Env');
const Youch = use('Youch');

class ExceptionHandler extends BaseExceptionHandler {
  async handle(error, { request, response }) {
    if (Env.get('NODE_ENV') === 'development') {
      const youch = new Youch(error, request);
      const errorJSON = await youch.toJSON();

      return response.status(error.status).send(errorJSON);
    }
    return response.status(error.status).send(error.message);
  }

  async report(error, { request }) {}
}

module.exports = ExceptionHandler;
