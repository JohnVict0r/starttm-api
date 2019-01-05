const { Person, Address } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');

const { addressF } = use('App/Utils/ModelsFilter');

class AddressController {
  async update({ request, params }) {
    const options = { new: true, runValidators: true, fields: addressF };

    const data = request.except(['_id']);

    const person = await Person.findById(params.people_id);

    if (!person) throw new ResourceNotFoundException('Cannot did find a person by given data', 400);

    const add = await Address.findByIdAndUpdate(params.id, data, options);

    return add;
  }
}

module.exports = AddressController;
