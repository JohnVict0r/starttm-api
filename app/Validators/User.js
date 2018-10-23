'use strict'

const { validate } = use('Validator');

class User {

    async validateEmail( email) {
        let rules = {
            email: 'email|required'
        }

        let validation = await validate({ email }, rules);

        if (validation.fails())
            return false;

        return true;
    }

    async validateUsername(username) {
        let rules = {
            username: 'alpha_numeric',
        }

        let validation = await validate({ username }, rules);

        if (validation.fails())
            return false;

        return true;
    }


}

module.exports = new User();