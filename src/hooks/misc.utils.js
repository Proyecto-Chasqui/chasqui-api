const utils = {};

/**
 * @function skipFeathersInternalCall
 * @summary Given a context checks wheter the call is a request or a feathers
 * intenal call.
 * @param {Object} context A before hook context.
 * @returns {Object} A before hook context.
 */
utils.skipFeathersInternalCall = (context) => {
  if(!context.params.provider) {
    return context;
  }
};

/**
 * @function searchRegex
 * @summary Given a context it generates regexes to search in Mongo as
 * if it where a %LIKE% query in SQL. Name of the desired search property
 * needs to be prepended by the word search. This can be used only in String
 * fields
 * @param {Object} context An after hook context.
 * @returns A context with it's params.query modified.
 */
utils.likeRegex = (context) => {
  const query = context.params.query;
  let newquery = {};
  for (let field in query) {
    if(query[field] && field.indexOf('search') == 0 && field.indexOf('$') == -1) {
      newquery[field.replace('search', '')] = { $like: `%${query[field]}%` };
    } else {
      newquery[field] = query[field];
    }
  }
  context.params.query = newquery;
  return context;
};


module.exports = utils;
