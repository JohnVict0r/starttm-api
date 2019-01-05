const { Role } = use('App/Models');
const { ResourceNotFoundException, UniqueResourceException } = use('App/Exceptions');
class RoleController {
  async index({ params }) {
    const roles = await Role.find({ user: params.users_id });

    return roles;
  }

  async show({ params }) {
    const role = await Role.findById(params.id);

    if (!role) throw new ResourceNotFoundException('Cannot did find a role by given data', 400);

    return role;
  }

  async store({ request, params }) {
    const data = request.only(['type']);
    const { users_id: user } = params;

    const result = await Role.findOne({ user, ...data, active: true });

    if (result) throw new UniqueResourceException('This active role already exists in the system', 400);

    const startDate = Date.now();

    const role = await Role.create({ ...data, startDate, user });

    return role;
  }
}

module.exports = RoleController;
