const Person = use('App/Models/Person');
const Address = use('App/Models/Address');

const { NotFoundEx } = use('App/Exceptions');
const { addressF } = use('App/Utils/ModelsFilter');

const viaCEP = require('../../Utils/ViaCEP');

class AddressController {
  async update({ request }) {
    const options = { new: true, runValidators: true, fields: addressF };

    const { people_id: _id, id: address } = request.params;

    const data = await viaCEP.getAddress({ address: request.all() });

    const person = await Person.findOne({ _id, address });

    if (!person) throw new NotFoundEx();

    const add = await Address.findOneAndUpdate({ address }, data, options);

    return add;
  }
}

module.exports = AddressController;
