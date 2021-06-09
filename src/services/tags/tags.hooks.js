const { debug } = require('feathers-hooks-common');
const { disallow } = require('feathers-hooks-common')

module.exports = {
  before: {
    all: [],
    find: [
      async context => {
        const sequelize = context.app.get('sequelizeClient')
        const { QueryTypes } = require('sequelize');
        const result = await sequelize.query(
          `SELECT 
            TAG.ID as id, TAG.NOMBRE as nombre, TAG.DESCRIPCION as descripcion,
              CASE 
              WHEN TAG_TIPO_ORGANIZACION.ID IS NOT NULL THEN "organizacion" 
              WHEN TAG_TIPO_PRODUCTO.id THEN "producto" 
              WHEN TAG_ZONA_COBERTURA.id THEN "zona" 
              END as tipo
            FROM TAG 
              left join TAG_TIPO_ORGANIZACION on TAG.id=TAG_TIPO_ORGANIZACION.ID
              left join TAG_TIPO_PRODUCTO on TAG.id=TAG_TIPO_PRODUCTO.id
              left join TAG_ZONA_COBERTURA on TAG.id=TAG_ZONA_COBERTURA.id;`,
          { type: QueryTypes.SELECT }
        )
        context.result = {data: result}
        return context
      }
    ],
    get: [],
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
