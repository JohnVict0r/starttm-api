const { Federation } = use('App/Models');
const { federationF, baseF } = use('App/Utils/ModelFilter');
const { ResourceNotFoundException } = use('App/Exceptions');

class FederationController {
  async index() {
    const federations = await Federation.find({}, federationF);
    return federations;
  }

  async show({ params }) {
    const federation = await Federation.findById(params.id, baseF);

    if (!federation) throw new ResourceNotFoundException('Cannot did find a federation by given data', 400);

    return federation;
  }

  async store({ request, response }) {
    const data = request.all();
    await Federation.create(data);
    response.send({ message: 'The resource has been created' }, 201);
  }

  async update({ request, params }) {
    const data = request.all();
    const options = { new: true, runValidators: true, fields: federationF };
    const federation = await Federation.findByIdAndUpdate(params.id, data, options);

    return federation;
  }

  async destroy({ params, response }) {
    await Federation.findByIdAndDelete(params.id);
    response.send({ message: 'The resource has been deleted' }, 200);
  }
}

module.exports = FederationController;
