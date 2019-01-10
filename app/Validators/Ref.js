const Antl = use('Antl');

class Ref {
  constructor(model) {
    this.validateRef = this.validateRef.bind(this);

    this.modelName = model;

    this.validator = {
      isAsync: true,
      validator: this.validateRef,
      message: Antl.formatMessage('validation.exist', { name: model }),
    };
  }

  async validateRef(_id) {
    const Model = use(`App/Models/${this.modelName}`);
    const doc = await Model.findById(_id);

    if (doc) return true;

    return false;
  }
}

module.exports = Ref;
