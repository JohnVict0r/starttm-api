const { Role, User } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');
const { roleF } = use('App/Utils/ModelFilter');

class RoleController {
  async index({ params }) {
    const user = await User.findById(params.users_id).populate('roles', roleF);

    const { roles } = user;

    return roles;
  }

  async show({ params }) {
    const role = await Role.findById(params.id, roleF);

    if (!role) throw new ResourceNotFoundException('Cannot did find a role by given data', 400);

    return role;
  }

  async store({ request, params }) {
    const data = request.only(['type']);
    const startDate = Date.now();

    const role = new Role({ ...data, startDate });
    const user = await User.findById(params.users_id);

    user.roles.push(role);

    await role.save();
    await user.save();

    return role;
  }
}

module.exports = RoleController;
