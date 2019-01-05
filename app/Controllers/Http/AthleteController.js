const { Athlete } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');
const { baseF, userF } = use('App/Utils/ModelFilter');

class AthleteController {
  async index() {
    const athletes = await Athlete.find();

    return athletes;
  }

  async show({ request }) {
    const { users_id: user, id: _id } = request.params;

    const athlete = await Athlete.findOne({ user, _id }, baseF).populate('user', userF);

    if (!athlete) throw new ResourceNotFoundException('Cannot did find a athlete by given data', 400);

    return athlete;
  }

  async store({ request, response }) {
    const { users_id: user } = request.params;

    const data = request.only(['rating', 'ranking']);

    await Athlete.create({ user, ...data });

    response.send({ message: 'The resource has been created' }, 201);
  }
}

module.exports = AthleteController;
