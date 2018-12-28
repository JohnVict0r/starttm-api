const NotFoundEx = use('App/Exceptions/NotFoundException');
const { User } = require('../../../Models');
const SignupRequest = require('../../../Models/Auth/SignupRequest');

class ConfirmationController {
  async show({ response, params }) {
    const signup = await SignupRequest.findOne({ token: params.token });

    if (!signup) throw new NotFoundEx();

    await SignupRequest.deleteOne({ token: params.token });

    const { email, username, password } = signup;

    await User.create({ email, username, password });

    response.status(201).send('User has been registred.');
  }
}

module.exports = ConfirmationController;
