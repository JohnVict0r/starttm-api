const { Federation } = use('App/Models');
const { federationF } = use('App/Utils/ModelFilter');
class FederationController {
  async index() {
    const federations = await Federation.find({}, federationF);
    return federations;
  }

  async store({ request, response }) {
    const data = request.all();
    await Federation.create(data);
    response.send({ message: 'The resource has been created' }, 201);
  }
}

module.exports = FederationController;
