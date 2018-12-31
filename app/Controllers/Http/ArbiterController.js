const { Arbiter } = require('../../Models');

const {
  baseF, arbiterF, userF, filterDoc,
} = use('App/Utils/ModelFilter');

class ArbiterController {
  async index() {
    const arbiters = await Arbiter.find();
    return arbiters;
  }

  async show({ request }) {
    const { users_id: user, id: _id } = request.params;

    const arbiter = await Arbiter.findOne({ user, _id }, baseF).populate('user', userF);

    return arbiter;
  }

  async store({ request }) {
    const { users_id: user } = request.params;

    const arbiter = await Arbiter.create({ user });

    arbiter._doc = filterDoc(arbiter._doc, arbiterF);

    return arbiter;
  }
}

module.exports = ArbiterController;
