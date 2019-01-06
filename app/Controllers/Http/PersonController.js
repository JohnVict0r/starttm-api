const { Person } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');
const { baseF, personF, userF } = use('App/Utils/ModelFilter');

class PersonController {
  async index() {
    const people = await Person.find({}, personF);

    return people;
  }

  async show({ request }) {
    const { users_id: user, id: _id } = request.params;

    const person = await Person.findOne({ user, _id }, baseF).populate('user', userF);

    if (!person) throw new ResourceNotFoundException('Cannot did find a person by given data', 400);

    return person;
  }

  async store({ request, response }) {
    const { users_id: user } = request.params;
    const data = request.only(['name', 'sex', 'birth', 'sex', 'cpf', 'rg', 'address']);

    await Person.create({ ...data, user });

    response.send({ message: 'The resource has been created' }, 201);
  }

  async update({ request }) {
    const options = { new: true, runValidators: true, fields: personF };

    const { users_id: user, id: _id } = request.params;

    const data = request.only(['name', 'sex', 'birth', 'address']);

    const person = await Person.findOneAndUpdate({ user, _id }, data, options);

    return person;
  }
}

module.exports = PersonController;
