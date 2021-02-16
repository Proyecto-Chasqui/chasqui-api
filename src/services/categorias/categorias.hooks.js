const { likeRegex } = require("../../hooks/misc.utils.js");
const categoriaPopulate = require('../../hooks/categoria-populate');
const { disallow } = require('feathers-hooks-common')

module.exports = {
  before: {
    all: [],
    find: [likeRegex, categoriaPopulate()],
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
