const { Arbiter } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');

const { baseF, arbiterF, userF } = use('App/Utils/ModelFilter');

class ArbiterController {
  async index() {
    const arbiters = await Arbiter.find({}, arbiterF);

    return arbiters;
  }

  async show({ params }) {
    const arbiter = await Arbiter.findById(params.id, baseF).populate('user', userF);

    if (!arbiter) throw new ResourceNotFoundException('Cannot did find a arbiter by given data', 400);

    return arbiter;
  }

  async store({ request, response }) {
    const data = request.all();

    await Arbiter.create(data);

    response.send({ message: 'The resource has been created' }, 201);
  }
}

module.exports = ArbiterController;
