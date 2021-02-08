// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const pedidos = sequelizeClient.define('PEDIDO', {
    alterable: { type: DataTypes.BOOLEAN, allowNull: false },
    estado: { type: DataTypes.STRING },
    fecha_creacion: { type: DataTypes.DATE },
    fecha_vencimiento: { type: DataTypes.DATE },
    fecha_modificacion: { type: DataTypes.DATE },
    monto_minimo: { type: DataTypes.INTEGER },
    monto_actual: { type: DataTypes.INTEGER },
    nombre_vendedor: { type: DataTypes.STRING },
    pertenece_a_grupal: { type: DataTypes.BOOLEAN },
    comentario: { type: DataTypes.STRING },
    tipo_ajuste: { type: DataTypes.STRING },
    usuario_creador: { type: DataTypes.STRING },
    orden: { type: DataTypes.INTEGER },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  pedidos.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/

    //pedidos.belongsTo(models.ZONA, {foreignKey: 'id_zona'});
    //pedidos.belongsTo(models.PUNTO_DE_RETIRO, {foreignKey: 'id_punto_de_retiro'});

    pedidos.belongsTo(models.PEDIDO_COLECTIVO, {foreignKey: 'id_pedido_colectivo'});
    pedidos.belongsTo(models.CLIENTE, {foreignKey: 'cliente'});
    pedidos.hasMany(models.PRODUCTO_PEDIDO,{ foreignKey: 'id_pedido'});
    pedidos.belongsTo(models.VENDEDOR,{ foreignKey: 'id_vendedor'});
    pedidos.belongsTo(models.DIRECCION,{ foreignKey: 'direccion_entrega'});
  };

  return pedidos;
};
