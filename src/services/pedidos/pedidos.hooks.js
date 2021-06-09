const pedidoPopulate = require('../../hooks/pedido-populate');
const { likeRegex } = require("../../hooks/misc.utils.js");
//const { debug } = require('feathers-hooks-common');
const { disallow } = require('feathers-hooks-common')

module.exports = {
  before: {
    all: [],
    find: [likeRegex, pedidoPopulate()],
    get: [pedidoPopulate()],
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
