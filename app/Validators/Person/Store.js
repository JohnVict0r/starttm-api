const Antl = use('Antl');

class Store {
  get rules() {
    return {
      name: 'required|alpha',
      password: 'required',
      sex: 'required|alpha',
    };
  }

  get validateAll() {
    return true;
  }

  get messages() {
    return Antl.list('validation');
  }
}

module.exports = Store;
