const { Tournament } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');
const { tournamentF, baseF } = use('App/Utils/ModelFilter');
class TournamentController {
  async index() {
    const tourns = await Tournament.find({}, tournamentF);
    return tourns;
  }

  async show({ params }) {
    const tournament = await Tournament.findById(params.id, baseF)
      .populate('arbiters')
      .populate('coaches')
      .populate('athletes')
      .populate('federation');

    if (!tournament) throw new ResourceNotFoundException('Cannot did find a tournament by given data', 400);

    return tournament;
  }

  async store({ request, response }) {
    const data = request.except();

    await Tournament.create(data);

    response.send({ message: 'The resource has been created' }, 201);
  }

  async update({ request, params }) {
    const data = request.except(['athletes', 'coaches', 'arbiters']);
    const options = { new: true, runValidators: true, fields: tournamentF };

    const tournament = await Tournament.findByIdAndUpdate(params.id, data, options);

    return tournament;
  }

  async destroy({ params, response }) {
    await Tournament.findByIdAndDelete(params.id);
    response.send({ message: 'The resource has been deleted' }, 200);
  }
}

module.exports = TournamentController;
