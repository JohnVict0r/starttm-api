const SignupRequest = use('App/Models/Auth/SignupRequest');
const { ResourceNotFoundException } = use('App/Exceptions');

const { User } = use('App/Models');

class ConfirmationController {
  async show({ response, params }) {
    const subscription = await SignupRequest.findOne({ token: params.token });

    if (!subscription) throw new ResourceNotFoundException('Cannot did find a subscription by given data', 400);

    await SignupRequest.deleteOne({ token: params.token });

    const { email, username, password } = subscription;

    await User.create({ email, username, password });

    response.status(201).send('User has been registred.');
  }
}

module.exports = ConfirmationController;
