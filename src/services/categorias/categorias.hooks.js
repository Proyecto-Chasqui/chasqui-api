const { likeRegex } = require("../../hooks/misc.utils.js");
const categoriaPopulate = require('../../hooks/categoria-populate');

module.exports = {
  before: {
    all: [],
    find: [likeRegex, categoriaPopulate()],
    get: [categoriaPopulate()],
    create: [],
    update: [],
    patch: [],
    remove: []
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
