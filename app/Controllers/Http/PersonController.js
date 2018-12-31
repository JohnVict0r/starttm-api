const { Person, Address } = use('App/Models/User');

const viaCEP = require('../../Utils/ViaCEP');

const {
  baseF, personF, userF, addressF, filterDoc,
} = use('App/Utils/ModelFilter');

class PersonController {
  async index() {
    const people = await Person.find();

    return people;
  }

  async show({ request }) {
    const { users_id: user, id: _id } = request.params;

    const person = await Person.findOne({ user, _id }, baseF)
      .populate('address', addressF)
      .populate('user', userF);

    return person;
  }

  async store({ request }) {
    const { users_id: user } = request.params;
    const data = request.only(['name', 'sex', 'birth', 'sex', 'cpf', 'rg', 'address']);

    let address = await viaCEP.getAddress(data);
    address = await Address.create(address);
    await address.validate();

    data.address = address._id;

    const person = new Person({ user, ...data });
    await person.validate();

    await address.save();
    await person.save();

    person._doc = filterDoc(person._doc, personF);

    return person;
  }

  async update({ request }) {
    const options = { new: true, runValidators: true, fields: personF };

    const { users_id: user, id: _id } = request.params;

    const data = request.only(['name', 'sex', 'birth']);

    const person = await Person.findOneAndUpdate({ user, _id }, data, options);

    return person;
  }
}

module.exports = PersonController;
