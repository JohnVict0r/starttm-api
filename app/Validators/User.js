const Antl = use('Antl');

class User {
  get rules() {
    return {
      username: 'required',
      email: 'required|email',
      password: 'required|confirmed',
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = User;
