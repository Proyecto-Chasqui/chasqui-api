// Initializes the `productores` service on path `/productores`
const { Productores } = require('./productores.class');
const createModel = require('../../models/productores.model');
const hooks = require('./productores.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/productores', new Productores(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('productores');

  service.hooks(hooks);
};
