const AuthEx = use('App/Exceptions/AuthException');
const NotFoundEx = use('App/Exceptions/NotFoundException');
const ValidationEx = use('App/Exceptions/ValidationException');
const CastEx = use('App/Exceptions/CastException');

module.exports = { AuthEx, NotFoundEx, ValidationEx, CastEx };