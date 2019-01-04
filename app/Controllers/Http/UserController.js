const { User } = use('App/Models');
const { baseF } = use('App/Utils/ModelFilter');
const { ResourceNotFoundException } = use('App/Exceptions');
class UserController {
  async index() {
    const users = await User.find();

    return users;
  }

  async show({ params }) {
    const user = await User.findById(params.id, baseF).populate('roles', baseF);

    if (!user) throw new ResourceNotFoundException('Cannot did find a User by given data', 400);

    return user;
  }
}

module.exports = UserController;
