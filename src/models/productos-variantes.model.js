// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const productosVariantes = sequelizeClient.define('VARIANTE', {
    descripcion: { type: DataTypes.STRING, allowNull: false },
    stock: { type: DataTypes.INTEGER, allowNull: false },
    precio: { type: DataTypes.INTEGER, allowNull: false },
    nombre: { type: DataTypes.STRING, allowNull: false },
    destacado: { type: DataTypes.BOOLEAN, allowNull: false },
    reservados: { type: DataTypes.BOOLEAN, allowNull: false },
    codigo: { type: DataTypes.STRING, allowNull: false },
    incentivo: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  productosVariantes.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    productosVariantes.belongsTo(models.PRODUCTO, {foreignKey: 'id_producto'});
  };

  return productosVariantes;
};
