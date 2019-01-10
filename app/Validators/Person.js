const Antl = use('Antl');

class Person {
  get rules() {
    return {
      user: 'required',
      name: 'required|alpha',
      password: 'required',
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Person;
