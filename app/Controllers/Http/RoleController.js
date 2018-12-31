const { Role } = use('Role');

class RoleController {
  async index() {
    const roles = await Role.find();
    return roles;
  }
}

module.exports = RoleController;
