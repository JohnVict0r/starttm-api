'use strict'

const User = use('App/Models/User');
const Person = use('App/Models/Person');

const { personF, filterDoc } = use('App/Utils/ModelFilter');

class PersonController {

    async show({ request, response }) {

        const { email } = request.all();

        const user = await User.findOne({ email }).populate('person', personF);

        response.status(200).send(user.person);
    }

    async store({ request, response }) {

        const { email } = request.all();

        const user = await User.findOne({ email });
        const person = await Person.create({ user, ...request.all() });

        user.person = person;
        await user.save();

        person._doc = filterDoc(person._doc, personF);

        response.status(201).send(person);
    }

    async update({ request, response }) {

        const options = { new: true, runValidators: true, fields: personF };

        const { email, name, sex, birth } = request.all();

        const user = await User.findOne({ email });
        const person = await Person.findOneAndUpdate({ user }, { name, sex, birth }, options);

        response.status(200).send(person);
    }

}

module.exports = PersonController
