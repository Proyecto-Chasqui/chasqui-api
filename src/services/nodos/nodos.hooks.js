const { likeRegex } = require("../../hooks/misc.utils.js");
const { disallow } = require('feathers-hooks-common')

module.exports = {
  before: {
    all: [],
    find: [likeRegex],
    get: [
      async context => {
        const sequelize = context.app.get('sequelizeClient')
        const { QueryTypes } = require('sequelize');


        const result = await sequelize.query(
          `SELECT * FROM GRUPOCC 
          inner join NODO on NODO.ID = GRUPOCC.ID 
          inner Join DIRECCION on NODO.ID_DIRECCION = DIRECCION.id
          where id_vendedor = ${context.arguments[0]} and NODO.tipo="NODO_ABIERTO";`,
          { type: QueryTypes.SELECT }
        )
        urlLogo: result[0].PATH,

          context.result = result.map(nodo => {
            return {
              barrio: nodo.BARRIO,
              descripcion: nodo.DESCRIPCION,
              direccionDelNodo: {
                alias: nodo.ALIAS,
                altura: nodo.ALTURA,
                calle: nodo.CALLE,
                calleAdyacente1: nodo.CALLEADYACENTE1,
                calleAdyacente2: nodo.CALLEADYACENTE2,
                codigoPostal: nodo.CODIGO_POSTAL,
                comentario: nodo.COMENTARIO,
                departamento: nodo.DEPARTAMENTO,
                geoUbicacion: nodo.GEO_UBICACION,
                latitud: nodo.GEO_UBICACION.coordinates[0],
                localidad: nodo.LOCALIDAD,
                longitud: nodo.GEO_UBICACION.coordinates[1],
                pais: nodo.PAIS,
                predeterminada: nodo.PREDETERMINADA,
                provincia: nodo.PROVINCIA,
              },
              emailAdministrador: nodo.EMAILADMIN,
              idNodo: nodo.ID,
              nombreDelNodo: nodo.ALIAS,
            }
          });

        return context
      }
      

    ],
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
