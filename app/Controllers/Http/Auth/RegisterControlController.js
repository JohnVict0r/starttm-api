'use strict'


const UserRequest = use('App/Models/UserRequest');
const User = use('App/Models/User');
const Mail = use('Mail');

const randomString = require('random-string');

class RegisterControlController {

    // Register New User
    async register({ request }) {

        const user = await UserRequest.create({
            ...request.all(),
            confirmationToken: randomString({ length: 50 })
        });

        let { confirmationToken, username } = user;

        await Mail.send('emails.signup', { confirmationToken, username  }, message => {
            message
                .to(user.email)
                .from('hello@adonisjs.com')
                .subject('Please confirm your email address')
        });

    }

    async confirmEmail({ params }) {

        const userRequest = await UserRequest.findOne({ confirmationToken: params.token, username: params.username });

        UserRequest.deleteOne({ confirmationToken: params.token, username: params.token });

        await User.create({ ...userRequest });
    }


}

module.exports = RegisterControlController