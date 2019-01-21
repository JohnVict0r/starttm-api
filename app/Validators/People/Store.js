const Antl = use('Antl');

class Store {
  get rules() {
    return {
      name: 'required|alpha',
      sex: 'required|alpha',
      user: 'required|existIn:User',
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
