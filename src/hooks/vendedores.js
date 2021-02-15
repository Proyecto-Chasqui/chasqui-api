// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  return async context => {
    const sequelize = context.app.get('sequelizeClient');
    const { 
      USUARIO, 
      ESTRATEGIA_DE_COMERCIALIZACION, 
      VENDEDOR_TAG_TIPO_ORGANIZACION,
      VENDEDOR_TAG_TIPO_PRODUCTO,
      VENDEDOR_TAG_ZONA_COBERTURA,
      TAG
    } = sequelize.models;

    let id_tag_tipo_organizacion = {};
    let id_tag_tipo_producto = {};
    let id_tag_zona_cobertura = {};

    if (context.params.query.tag_organizacion !== undefined) {
      id_tag_tipo_organizacion = {'id_tag_tipo_organizacion': context.params.query.tag_organizacion};
      delete context.params.query.tag_organizacion
    }
    if (context.params.query.tag_producto !== undefined) {
      id_tag_tipo_producto = { 'id_tag_tipo_producto': context.params.query.tag_producto };
      delete context.params.query.tag_producto
    }
    if (context.params.query.tag_cobertura !== undefined) {
      id_tag_zona_cobertura = { 'id_tag_zona_cobertura': context.params.query.tag_cobertura };
      delete context.params.query.tag_cobertura
    }

    context.params.sequelize = {
      include: [
        { model: USUARIO, attributes: ['imagen_de_perfil'] },
        { model: ESTRATEGIA_DE_COMERCIALIZACION },
        { model: VENDEDOR_TAG_TIPO_ORGANIZACION,
          where: id_tag_tipo_organizacion,
          include: [ 
            { model: TAG } 
          ] 
        },
        { model: VENDEDOR_TAG_TIPO_PRODUCTO,
          where: id_tag_tipo_producto,
          include: [
            { model: TAG }
          ]
         },
        { model: VENDEDOR_TAG_ZONA_COBERTURA,
          where: id_tag_zona_cobertura,
          include: [
            { model: TAG }
          ]
         },
      ],
      raw: false,
    };
    return context;
  };
};

