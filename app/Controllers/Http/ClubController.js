const { Club } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');

const {
  clubF, baseF, userF, federationF,
} = use('App/Utils/ModelFilter');

class ClubController {
  async index() {
    const clubs = await Club.find({}, clubF);
    return clubs;
  }

  async show({ params }) {
    const club = await Club.findById(params.id, baseF)
      .populate('manager', userF)
      .populate('eventManager', userF)
      .populate('federation', federationF);

    if (!club) throw new ResourceNotFoundException('Cannot did find a club by given data', 400);

    return club;
  }

  async store({ request, response }) {
    const data = request.all();
    await Club.create(data);
    response.send({ message: 'The resource has been created' }, 201);
  }

  async update({ request, params }) {
    const data = request.all();
    const options = { new: true, runValidators: true, fields: clubF };
    const club = await Club.findByIdAndUpdate(params.id, data, options);

    return club;
  }

  async destroy({ params, response }) {
    await Club.findByIdAndDelete(params.id);
    response.send({ message: 'The resource has been deleted' }, 200);
  }
}

module.exports = ClubController;
