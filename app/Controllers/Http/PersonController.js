'use strict'

const User = use('App/Models/User');
const Person = use('App/Models/Person');
const Address = use('App/Models/Address')

const { personF, filterDoc } = use('App/Utils/ModelFilter');

class PersonController {


    async index({ request, response }) {

        const persons = await Person.find();

        response.status(200).send(persons);
    }

    async show({ request, response }) {

        const { users_id, id } = request.params;

        const person = await Person.findOne({ user: users_id, _id: id }, personF);

        response.status(200).send(person);
    }

    async store({ request, response }) {

        const { users_id } = request.params;
        let data = request.only(['name', 'sex', 'birth', 'sex', 'cpf', 'rg', 'address']);

        let address = new Address(data.address);
        await address.validate();

        data.address = address._id;
        
        let person = new Person({ user: users_id, ...data });
        await person.validate();
        
        await address.save();
        await person.save();
        
        person._doc = filterDoc(person._doc, personF);

        response.status(201).send();
    }

    async update({ request, response }) {

        const options = { new: true, runValidators: true, fields: personF };

        const { users_id, id } = request.params;

        const data = request.only(['name', 'sex', 'birth']);

        const person = await Person.findOneAndUpdate({ user: users_id, _id: id }, data, options);

        response.status(200).send(person);
    }

}

module.exports = PersonController
