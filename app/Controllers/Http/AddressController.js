"use strict";

const Person = use("App/Models/Person");
const Address = use("App/Models/Address");

const { NotFoundEx } = use("App/Exceptions");
const { addressF } = use("App/Utils/ModelsFilter");

class AddressController {
  async update({ request, response }) {
    const options = { new: true, runValidators: true, fields: addressF };

    const { people_id, id } = request.params;

    let data = await viaCEP.getAddress({ address: request.all() });

    const person = await Person.findOne({ _id: people_id, address: id });

    if (!person) throw new NotFoundEx();

    const address = await Address.findOneAndUpdate({ _id: id }, data, options);

    response.status(200).send(address);
  }
}

module.exports = AddressController;
