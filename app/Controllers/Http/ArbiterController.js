const { Arbiter } = require('../../Models');

const {
  baseF, arbiterF, userF, filterDoc,
} = use('App/Utils/ModelFilter');

class ArbiterController {
  async index({ response }) {
    const arbiters = await Arbiter.find();
    response.status(200).send(arbiters);
  }

  async show({ request, response }) {
    const { users_id: user, id: _id } = request.params;

    const arbiter = await Arbiter.findOne({ user, _id }, baseF).populate('user', userF);

    response.status(200).send(arbiter);
  }

  async store({ request, response }) {
    const { users_id: user } = request.params;

    const arbiter = await Arbiter.create({ user });

    arbiter._doc = filterDoc(arbiter._doc, arbiterF);

    response.status(200).send(arbiter);
  }
}

module.exports = ArbiterController;
