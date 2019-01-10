const { Person } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');
const { baseF, personF, userF } = use('App/Utils/ModelFilter');

class PersonController {
  async index() {
    const people = await Person.find({}, personF);

    return people;
  }

  async show({ params }) {
    const person = await Person.findById(params.id, baseF).populate('user', userF);

    if (!person) throw new ResourceNotFoundException('Cannot did find a person by given data', 400);

    return person;
  }

  async store({ request, response }) {
    const data = request.all();

    await Person.create(data);

    response.send({ message: 'The resource has been created' }, 201);
  }

  async update({ request, params }) {
    const options = { new: true, runValidators: true, fields: personF };

    const { _id: id } = params;
    const user = request.input('user');

    const data = request.only(['name', 'sex', 'birth', 'address']);
    const person = await Person.findOneAndUpdate({ user, id }, data, options);

    return person;
  }
}

module.exports = PersonController;
