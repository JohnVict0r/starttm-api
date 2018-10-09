'use strict'


const User = use('App/Models/User');
const Mail = use('Mail');

const randomString = require('random-string');

class RegisterControlController {
    
    // Register New User
    async register({ request }) {

        let { username, email, password } = request.all();

        const user = await User.create({
            username, email, password,
            confirmationToken: randomString({ lenght: 50 })
        });

        await Mail.send('emails.signup', JSON.stringify(user), message => {
            message
                .to(user.email)
                .from('hello@adonisjs.com')
                .subject('Please confirm your email address')
        });

    }


}

module.exports = RegisterControlController