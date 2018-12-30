const { Role } = use('Role');

class RoleController {
  async index({ response }) {
    const roles = await Role.find();
    response.status(200).send(roles);
  }
}

module.exports = RoleController;
