const { Atlethe } = use('App/Models');

const {
  baseF, atletheF, userF, filterDoc,
} = use('App/Utils/ModelFilter');

class AtletheController {
  async index() {
    const atlethe = await Atlethe.find();

    return atlethe;
  }

  async show({ request }) {
    const { users_id: user, id: _id } = request.params;

    const atlethe = await Atlethe.findOne({ user, _id }, baseF).populate('user', userF);

    return atlethe;
  }

  async store({ request }) {
    const { users_id: user } = request.params;

    const data = request.only(['rating', 'rank']);

    const atlethe = await Atlethe.create({ user, ...data });

    atlethe._doc = filterDoc(atlethe._doc, atletheF);

    return atlethe;
  }

  async update({ request, response }) {
    /* Analisar */
  }
}

module.exports = AtletheController;
