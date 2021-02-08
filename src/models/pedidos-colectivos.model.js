// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const pedidosColectivos = sequelizeClient.define('PEDIDO_COLECTIVO', {
    estado: { type: DataTypes.STRING },
    fecha_creacion: { type: DataTypes.DATE },
    fecha_modificacion: { type: DataTypes.DATE },
    comentario: { type: DataTypes.STRING },
    estado: { type: DataTypes.STRING },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  pedidosColectivos.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    //ID_ZONA
    //DIRECCION_ENTREGA
    //ID_PUNTO_DE_RETIRO
    //COLECTIVO > GRUPOCC
    pedidosColectivos.hasMany(models.PEDIDO,{ foreignKey: 'id_pedido_colectivo'});
  };

  return pedidosColectivos;
};
