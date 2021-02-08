// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const productosPedido = sequelizeClient.define('PRODUCTO_PEDIDO', {
    id_variante: { type: DataTypes.INTEGER, allowNull: false },
    precio: { type: DataTypes.INTEGER, allowNull: false },
    nombre_producto: { type: DataTypes.STRING, allowNull: false },
    nombre_variante: { type: DataTypes.STRING, allowNull: false },
    cantidad: { type: DataTypes.INTEGER, allowNull: false },
    imagen: { type: DataTypes.STRING, allowNull: false },
    nombre_productor: { type: DataTypes.STRING, allowNull: false },
    incentivo: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  productosPedido.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    productosPedido.belongsTo(models.PEDIDO, {foreignKey: 'id_pedido'});

  };

  return productosPedido;
};
