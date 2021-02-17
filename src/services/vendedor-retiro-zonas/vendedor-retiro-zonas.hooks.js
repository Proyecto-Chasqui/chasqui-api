const { disallow } = require('feathers-hooks-common')


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [disallow],
    update: [disallow],
    patch: [disallow],
    remove: [disallow]
  },

  after: {
    all: [
      context => {
        // {
        //   id: 4,
        //   nombre: "Recoleta, Palermo, Colegiales",
        //   id_vendedor: 52,
        //   fecha_cierre_pedidos: "2018-08-06T00:00:00.000Z",
        //   descripcion: "ENTREGAS MIÉRCOLES 8: Recoleta, Palermo, Colegiales",
        //   geo_area: null
        // }

        
        
        const result = context.result.data.map(result =>( {
          geometry: {
            coordinates: result.geo_area?.coordinates[0].map( coor =>  ({ x: coor[0], y: coor[1] }) )
          },
          properties: {
            fechaCierre: result.fecha_cierre_pedidos,
            id: result.id,
            mensaje: result.descripcion,
            nombreZona: result.nombre,
          },
          status: "OK",
          type: "Feature"

        } ));
        context.result.data = result
        return context
      }
    ],
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
