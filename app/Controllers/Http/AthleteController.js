const { Athlete } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');
const {
  baseF, userF, federationF, athleteF,
} = use('App/Utils/ModelFilter');

class AthleteController {
  async index() {
    const athletes = await Athlete.find({}, athleteF);

    return athletes;
  }

  async show({ params }) {
    const athlete = await Athlete.findById(params.id, baseF)
      .populate('user', userF)
      .populate('federation', federationF);

    if (!athlete) throw new ResourceNotFoundException('Cannot did find a athlete by given data', 400);

    return athlete;
  }

  async store({ request, response }) {
    const data = request.all();

    await Athlete.create(data);

    response.send({ message: 'The resource has been created' }, 201);
  }
}

module.exports = AthleteController;
