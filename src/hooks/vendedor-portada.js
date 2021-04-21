// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
      if (context.params.query.nombre_corto_vendedor !== undefined) {
        const sequelize = context.app.get('sequelizeClient');
        const { QueryTypes } = require('sequelize');
        const result = await sequelize.query(
          `SELECT 
                IMAGEN.PATH,
                DATA_PORTADA.textoBienvenida,
                DATA_PORTADA.PORTADA_VISIBLE,
                DATA_CONTACTO.telefono,
                DATA_CONTACTO.celular,
                DATA_CONTACTO.email,
                DATA_CONTACTO.url,
                DIRECCION.CALLE,
                DIRECCION.CALLEADYACENTE1,
                DIRECCION.CALLEADYACENTE2,
                DIRECCION.ALTURA,
                DIRECCION.LOCALIDAD,
                DIRECCION.CODIGO_POSTAL,
                DIRECCION.LATITUD,
                DIRECCION.LONGITUD,
                DIRECCION.PREDETERMINADA,
                DIRECCION.DEPARTAMENTO,
                DIRECCION.ALIAS,
                DIRECCION.COMENTARIO,
                DIRECCION.PAIS,
                DIRECCION.PROVINCIA,
                DIRECCION.ID
            FROM VENDEDOR 
            left join DATA_MULTIMEDIA on DATA_MULTIMEDIA.idVendedor=VENDEDOR.id
            left join DATA_PORTADA on DATA_MULTIMEDIA.ID_DATA_PORTADA=DATA_PORTADA.ID
            left join DATA_CONTACTO on DATA_MULTIMEDIA.ID_DATA_CONTACTO=DATA_CONTACTO.ID
            left join IMAGEN on DATA_PORTADA.ID_IMAGEN_LOGO=IMAGEN.ID
            left join DIRECCION on DATA_CONTACTO.DIRECCION_CONTACTO=DIRECCION.ID
            where NOMBRE_CORTO_VENDEDOR="${context.params.query.nombre_corto_vendedor}";`,
          { type: QueryTypes.SELECT }
        );

        const imagenesBanner = await sequelize.query(
          `SELECT 
              IMAGEN.PATH
            FROM VENDEDOR 
              left join DATA_MULTIMEDIA on DATA_MULTIMEDIA.idVendedor=VENDEDOR.id
              left join DATA_PORTADA on DATA_MULTIMEDIA.ID_DATA_PORTADA=DATA_PORTADA.ID
              left join IMAGEN on DATA_PORTADA.ID=IMAGEN.ID_DATA_BANNER
            where NOMBRE_CORTO_VENDEDOR="${context.params.query.nombre_corto_vendedor}";`,
          { type: QueryTypes.SELECT }
        )

        context.result = {
          urlLogo: result[0].PATH,
          urlImagenesBanner: imagenesBanner.map(img => img.PATH),
          textoPortada: result[0].textoBienvenida,
          portadaVisible: result[0].PORTADA_VISIBLE,
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

      }
      return context
    }
};

