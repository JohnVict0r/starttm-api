const { Person, Address } = use('App/Models/User');

const viaCEP = require('../../Utils/ViaCEP');

const {
  baseF, personF, userF, addressF, filterDoc,
} = use('App/Utils/ModelFilter');

class PersonController {
  async index({ response }) {
    const persons = await Person.find();

    response.status(200).send(persons);
  }

  async show({ request, response }) {
    const { users_id: user, id: _id } = request.params;

    const person = await Person.findOne({ user, _id }, baseF)
      .populate('address', addressF)
      .populate('user', userF);

    response.status(200).send(person);
  }

  async store({ request, response }) {
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

    response.status(201).send();
  }

  async update({ request, response }) {
    const options = { new: true, runValidators: true, fields: personF };

    const { users_id: user, id: _id } = request.params;

    const data = request.only(['name', 'sex', 'birth']);

    const person = await Person.findOneAndUpdate({ user, _id }, data, options);

    response.status(200).send(person);
  }
}

module.exports = PersonController;
