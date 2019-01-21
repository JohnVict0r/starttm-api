const { hooks } = require('@adonisjs/ignitor');

hooks.before.httpServer(() => {
  const Validator = use('Validator');

  const existIn = async (data, field, message, args, get) => {
    const value = get(data, field);

    if (!value) return;

    const [model] = args;
    const Model = use(`App/Models/${model}`);

    const doc = await Model.findById(value);

    if (!doc) throw message;
  };

  Validator.extend('existIn', existIn);
});
