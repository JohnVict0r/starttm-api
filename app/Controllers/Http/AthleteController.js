const { Athlete } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');

const {
  baseF, athleteF, userF, filterDoc,
} = use('App/Utils/ModelFilter');

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

  async store({ request }) {
    const { users_id: user } = request.params;

    const data = request.only(['rating', 'rank']);

    const athlete = await Athlete.create({ user, ...data });

    athlete._doc = filterDoc(athlete._doc, athleteF);

    return athlete;
  }
}

module.exports = AthleteController;
