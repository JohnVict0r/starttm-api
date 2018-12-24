const { User } = require('../../Models');

const { baseF } = use('App/Utils/ModelFilter');

class UserController {
  async index({ response }) {
    const users = await User.find();

    response.send(users);
  }

  async show({ request, response }) {
    const { id: _id } = await request.params;

    const user = await User.findOne({ _id }, baseF).populate('roles', baseF);

    response.status(200).send(user);
  }
}

module.exports = UserController;
