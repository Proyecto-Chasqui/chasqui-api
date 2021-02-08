const { likeRegex } = require("../../hooks/misc.utils.js");
const productoPopulate = require('../../hooks/producto-populate');

module.exports = {
  before: {
    all: [],
    find: [likeRegex, productoPopulate()],
    get: [productoPopulate()],
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
