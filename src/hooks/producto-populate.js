// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

// eslint-disable-next-line no-unused-vars
module.exports = function (options = {}) {
  return async context => {
    const sequelize = context.app.get('sequelizeClient');
    const { CATEGORIA, CARACTERISTICA, VARIANTE, PRODUCTOR, CARACTERISTICA_PRODUCTOR, IMAGEN } = sequelize.models;

    let id_vendedor = 0;
    let id_medallas_producto = 0;
    let id_medallas_productor = 0;

    if (context.params.query.id_vendedor !== undefined) {
      id_vendedor = { 'id_vendedor': context.params.query.id_vendedor };
      delete context.params.query.id_vendedor
    }

    if (context.params.query.id_medallas_producto !== undefined) {
      id_medallas_producto = { 'id': context.params.query.id_medallas_producto };
      delete context.params.query.id_medallas_producto
    }

    if (context.params.query.id_medallas_productor !== undefined) {
      id_medallas_productor = { 'id_caracteristica': context.params.query.id_medallas_productor };
      delete context.params.query.id_medallas_productor
    }

    context.params.sequelize = {
      include: [
        { model: CATEGORIA,
          where: id_vendedor,
        },
        { model: CARACTERISTICA,
          where: id_medallas_producto
        },
        { model: VARIANTE,
          include: [
            { model: IMAGEN }
          ]
        },
        { model: PRODUCTOR,
          where: id_medallas_productor,
          include: [
            { model: CARACTERISTICA_PRODUCTOR },
          ],
        },
      ],
      raw: false,
    };
    return context;
  };
};
