const { likeRegex } = require("../../hooks/misc.utils.js");
const productoPopulate = require('../../hooks/producto-populate');
const { disallow } = require('feathers-hooks-common')

module.exports = {
  before: {
    all: [],
    find: [likeRegex, productoPopulate()],
    get: [productoPopulate()],
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
