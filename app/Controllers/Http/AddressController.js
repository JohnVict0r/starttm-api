const { Person, Address } = use('App/Models');
const { ResourceNotFoundException } = use('App/Exceptions');

const { addressF } = use('App/Utils/ModelsFilter');

class AddressController {
  async update({ request }) {
    const options = { new: true, runValidators: true, fields: addressF };

    const { people_id: _id, id: address } = request.params;

    const data = request.except(['_id']);

    const person = await Person.findOne({ _id, address });

    if (!person) throw new ResourceNotFoundException('Cannot did find a person by given data', 400);

    const add = await Address.findOneAndUpdate({ address }, data, options);

    return add;
  }
}

module.exports = AddressController;
