const { Arbiter } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');

const {
  baseF, userF,
} = use('App/Utils/ModelFilter');

class ArbiterController {
  async index() {
    const arbiters = await Arbiter.find();

    return arbiters;
  }

  async show({ request }) {
    const { users_id: user, id: _id } = request.params;

    const arbiter = await Arbiter.findOne({ user, _id }, baseF).populate('user', userF);

    if (!arbiter) throw new ResourceNotFoundException('Cannot did find a arbiter by given data', 400);

    return arbiter;
  }

  async store({ request, response }) {
    const { users_id: user } = request.params;

    await Arbiter.create({ user });

    response.send({ message: 'The resource has been created' }, 201);
  }
}

module.exports = ArbiterController;
