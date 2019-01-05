const { Role } = use('App/Models');
const { ResourceNotFoundException } = use('App/Models');
class RoleController {
  async index({ params }) {
    const roles = await Role.find({ user: params.users_id });

    return roles;
  }

  async show({ params }) {
    const role = await Role.findById(params.id);
    return role;
  }

  async store({ request }) {}

  async destroy({ params }) {}
}

module.exports = RoleController;
