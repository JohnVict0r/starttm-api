const md5 = require('md5');
const SignupRequest = require('../../../Models/Auth/SignupRequest');

const Mail = use('Mail');

class SubscriptionController {
  async store({ request, response }) {
    const { username, email, password } = request.all();
    const token = md5(email + password + username);

    const signup = await SignupRequest.create({ ...request.all(), token });

    await Mail.send('emails.signup', signup, (message) => {
      message
        .to(email)
        .from('starttm@account.com')
        .subject('Confirm Email Address');
    });

    response.status(202).send({
      message: 'Confirmation email has been send',
      link: `http://localhost:3333/confirmations/${token}`,
    });
  }
}

module.exports = SubscriptionController;
