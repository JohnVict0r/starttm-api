const { validate } = use('Validator');

class User {
  async validateEmail(email) {
    const rules = {
      email: 'email|required',
    };

    const validation = await validate({ email }, rules);

    if (validation.fails()) return false;

    return true;
  }

  async validateUsername(username) {
    const rules = {
      username: 'alpha_numeric',
    };

    const validation = await validate({ username }, rules);

    if (validation.fails()) return false;

    return true;
  }
}

module.exports = new User();
