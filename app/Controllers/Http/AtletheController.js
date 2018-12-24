const { Atlethe } = require('../../Models');

const {
  baseF, atletheF, userF, filterDoc,
} = use('App/Utils/ModelFilter');

class AtletheController {
  async index({ response }) {
    const atlethe = await Atlethe.find();

    response.status(200).send(atlethe);
  }

  async show({ request, response }) {
    const { users_id: user, id: _id } = request.params;

    const atlethe = await Atlethe.findOne({ user, _id }, baseF).populate('user', userF);

    response.status(200).send(atlethe);
  }

  async store({ request, response }) {
    const { users_id: user } = request.params;

    const data = request.only(['rating', 'rank']);

    const atlethe = await Atlethe.create({ user, ...data });

    atlethe._doc = filterDoc(atlethe._doc, atletheF);

    response.status(200).send(atlethe);
  }

  async update({ request, response }) {
    /* Analisar */
  }
}

module.exports = AtletheController;
