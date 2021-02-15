// Initializes the `vendedor-tag-cobertura` service on path `/vendedor-tag-cobertura`
const { VendedorTagCobertura } = require('./vendedor-tag-cobertura.class');
const createModel = require('../../models/vendedor-tag-cobertura.model');
const hooks = require('./vendedor-tag-cobertura.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vendedor-tag-cobertura', new VendedorTagCobertura(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vendedor-tag-cobertura');

  service.hooks(hooks);
};
