// Initializes the `vendedor-tag-organizacion` service on path `/vendedor-tag-organizacion`
const { VendedorTagOrganizacion } = require('./vendedor-tag-organizacion.class');
const createModel = require('../../models/vendedor-tag-organizacion.model');
const hooks = require('./vendedor-tag-organizacion.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vendedor-tag-organizacion', new VendedorTagOrganizacion(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vendedor-tag-organizacion');

  service.hooks(hooks);
};
