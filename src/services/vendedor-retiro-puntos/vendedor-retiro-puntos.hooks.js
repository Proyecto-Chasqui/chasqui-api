const { disallow } = require('feathers-hooks-common')


const vendedorRetiroPuntosPopulate = require('../../hooks/vendedor-retiro-puntos-populate');


module.exports = {
  before: {
    all: [],
    find: [vendedorRetiroPuntosPopulate()],
    get: [vendedorRetiroPuntosPopulate()],
    create: [disallow],
    update: [disallow],
    patch: [disallow],
    remove: [disallow]
  },

  after: {
    all: [],
    find: [
      context => {
        //         {
        //           id: 299,
        //             nombre: "Bernal Plazoleta Rodolfo Walsh",
        //               descripcion: "Las entregas se realizarán el Viernes 31/7/20 de 11,30 a 15 hrs",
        //                 disponible: {
        //             type: "Buffer",
        //               data: [
        //                 1
        //               ]
        //           },
        //       direccion: 1129,
        //       id_punto_de_retiro: 280,
        //       indice: 0,
        //       DIRECCION: {
        //         id: 1129,
        //         calle: "Roque Saénz Peña ",
        //         calleadyacente1: null,
        //         calleadyacente2: null,
        //         altura: 340,
        //         localidad: "Bernal",
        //         codigo_postal: "",
        //         latitud: "-34.7062401",
        //         longitud: "-58.2771778",
        //         alias: null,
        //         predeterminada: null,
        //         geo_ubicacion: {
        //           type: "Point",
        //           coordinates: [
        //             -34.7062401,
        //             -58.2771778
        //           ]
        //         },
        //         comentario: null,
        //         orden: null,
        //         provincia: "Buenos Aires",
        //         pais: "Argentina",
        //         id_cliente: null
        //       }
        // }


        
        const result = context.result.data.map(result => ({
          habilitado: true, //result.disponible,
          id: result.id,
          mensaje: result.descripcion,
          nombre: result.nombre,
          direccion: {
            alias: result.DIRECCION.alias,
            altura: result.DIRECCION.altura,
            calle: result.DIRECCION.calle,
            calleAdyacente1: result.DIRECCION.calleadyacente1,
            calleAdyacente2: result.DIRECCION.calleadyacente2,
            codigoPostal: result.DIRECCION.codigo_postal,
            comentario: result.DIRECCION.comentario,
            departamento: result.DIRECCION.localidad,
            geoUbicacion: result.DIRECCION.geo_ubicacion,
            id: result.DIRECCION.id,
            latitud: result.DIRECCION.latitud,
            localidad: result.DIRECCION.localidad,
            longitud: result.DIRECCION.longitud,
            pais: result.DIRECCION.pais,
            predeterminada: result.DIRECCION.predeterminada,
            provincia: result.DIRECCION.provincia,
          }
        }));
        context.result.data = result
        return context
      }
    ],
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
