const { User } = use('App/Models');
const { baseF } = use('App/Utils/ModelFilter');

class UserController {
  async index() {
    const users = await User.find();

    return users;
  }

  async show({ request }) {
    const { id: _id } = await request.params;

    const user = await User.findOne({ _id }, baseF).populate('roles', baseF);

    return user;
  }
}

module.exports = UserController;
