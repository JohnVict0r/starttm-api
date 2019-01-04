const SubscriptionRequest = use('App/Models/Auth/SubscriptionRequest');
const { ResourceNotFoundException } = use('App/Exceptions');

const { User } = use('App/Models');

class ConfirmationController {
  async show({ response, params }) {
    const subscription = await SubscriptionRequest.findOne({ token: params.token });

    if (!subscription) throw new ResourceNotFoundException('Cannot did find a subscription by given data', 400);

    const { email, username, password } = subscription;

    await User.create({ email, username, password });

    await SubscriptionRequest.deleteOne({ token: params.token });

    response.status(201).send({ message: 'That user has been registred.' });
  }
}

module.exports = ConfirmationController;
