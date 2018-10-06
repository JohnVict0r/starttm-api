'use strict'


const User = use('App/Models/User');

const { validateAll } = use('Validator');
const randomString = require('random-string');

class RegisterControlController {

    async register({ request, session, response }) {


        const { username, email, password } = request.all();


        const validation = await validateAll(request.all(), {
            username: 'required',
            email: 'required',
            password: 'required',
        })

        if (validation.fails()) {
            return { Error: "Validation Failed" };
        }

        const user = await User.create({
            username, email, password,
            confirmationToken: randomString({ lenght: 40 })
        });

    }


}

module.exports = RegisterControlController