const { likeRegex } = require("../../hooks/misc.utils.js");
const vendedores = require('../../hooks/vendedores');
//const { debug } = require('feathers-hooks-common');


module.exports = {
  before: {
    all: [],
    find: [likeRegex, vendedores()],
    get: [
      async context => {
        const sequelize = context.app.get('sequelizeClient')
        const { QueryTypes } = require('sequelize');
        const result = await sequelize.query(
          `SELECT 
              chasqui.IMAGEN.PATH,
              chasqui.DATA_PORTADA.textoBienvenida,
              chasqui.DATA_CONTACTO.telefono,
              chasqui.DATA_CONTACTO.celular,
              chasqui.DATA_CONTACTO.email,
              chasqui.DATA_CONTACTO.url,
              chasqui.DIRECCION.CALLE,
              chasqui.DIRECCION.CALLEADYACENTE1,
              chasqui.DIRECCION.CALLEADYACENTE2,
              chasqui.DIRECCION.ALTURA,
              chasqui.DIRECCION.LOCALIDAD,
              chasqui.DIRECCION.CODIGO_POSTAL,
              chasqui.DIRECCION.LATITUD,
              chasqui.DIRECCION.LONGITUD,
              chasqui.DIRECCION.PREDETERMINADA,
              chasqui.DIRECCION.DEPARTAMENTO,
              chasqui.DIRECCION.ALIAS,
              chasqui.DIRECCION.COMENTARIO,
              chasqui.DIRECCION.PAIS,
              chasqui.DIRECCION.PROVINCIA,
              chasqui.DIRECCION.ID
          FROM chasqui.VENDEDOR 
          left join chasqui.DATA_MULTIMEDIA on chasqui.DATA_MULTIMEDIA.idVendedor=chasqui.VENDEDOR.id
          left join chasqui.DATA_PORTADA on chasqui.DATA_MULTIMEDIA.ID_DATA_PORTADA=chasqui.DATA_PORTADA.ID
          left join chasqui.DATA_CONTACTO on chasqui.DATA_MULTIMEDIA.ID_DATA_CONTACTO=chasqui.DATA_CONTACTO.ID
          left join chasqui.IMAGEN on chasqui.DATA_PORTADA.ID_IMAGEN_LOGO=chasqui.IMAGEN.ID
          left join chasqui.DIRECCION on chasqui.DATA_CONTACTO.DIRECCION_CONTACTO=chasqui.DIRECCION.ID
          where NOMBRE_CORTO_VENDEDOR="${context.arguments[0]}";`,
          { type: QueryTypes.SELECT }
        )

        const imagenesBanner = await sequelize.query(
          `SELECT 
            chasqui.IMAGEN.PATH
          FROM chasqui.VENDEDOR 
            left join chasqui.DATA_MULTIMEDIA on chasqui.DATA_MULTIMEDIA.idVendedor=chasqui.VENDEDOR.id
            left join chasqui.DATA_PORTADA on chasqui.DATA_MULTIMEDIA.ID_DATA_PORTADA=chasqui.DATA_PORTADA.ID
            left join chasqui.IMAGEN on chasqui.DATA_PORTADA.ID=chasqui.IMAGEN.ID_DATA_BANNER
          where NOMBRE_CORTO_VENDEDOR="${context.arguments[0]}";`,
          { type: QueryTypes.SELECT }
        )

        context.result = { 
          urlLogo: result[0].PATH, 
          urlImagenesBanner: imagenesBanner.map(img => img.PATH),
          textoPortada: result[0].textoBienvenida,
          dataContacto: {
            direccion: {
              calle: result[0].CALLE,
              calleAdyacente1: result[0].CALLEADYACENTE1,
              calleAdyacente2: result[0].CALLEADYACENTE2,
              altura: result[0].ALTURA,
              localidad: result[0].LOCALIDAD,        
              codigoPostal: result[0].CODIGO_POSTAL,    
              latitud: result[0].LATITUD,
              longitud: result[0].LONGITUD,
              predeterminada: result[0].PREDETERMINADA,
              departamento: result[0].DEPARTAMENTO,           
              alias: result[0].ALIAS,
              idDireccion: result[0].ID,
              comentario: result[0].COMENTARIO,
              pais: result[0].PAIS,
              provincia: result[0].PROVINCIA,
            }
          },
          telefono: result[0].telefono,
          celular: result[0].celular,
          email: result[0].email,
          url: result[0].url
        }
        return context
      }
    ],
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
