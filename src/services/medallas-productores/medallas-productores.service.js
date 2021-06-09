// Initializes the `medallas-productores` service on path `/medallas-productores`
const { MedallasProductores } = require('./medallas-productores.class');
const createModel = require('../../models/medallas-productores.model');
const hooks = require('./medallas-productores.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/medallas-productores', new MedallasProductores(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('medallas-productores');

  service.hooks(hooks);
};
