const {BadRequest } = require('@feathersjs/errors');
const { likeRegex } = require("../../hooks/misc.utils.js");
const categoriaPopulate = require('../../hooks/categoria-populate');
const { disallow } = require('feathers-hooks-common');


const required = (context) => {
  if(!('id_vendedor' in context.params.query)) {
    throw new BadRequest('Id del vendedor es requerido');
  }
  
  return context;
};


module.exports = {
  before: {
    all: [],
    find: [required, likeRegex, categoriaPopulate()],
    get: [categoriaPopulate()],
    create: [disallow],
    update: [disallow],
    patch: [disallow],
    remove: [disallow]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
