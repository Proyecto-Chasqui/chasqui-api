// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const productos = sequelizeClient.define('PRODUCTO', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    id_productor: { type: DataTypes.INTEGER, allowNull: false },
    ocultado: { type: DataTypes.BOOLEAN, allowNull: false },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  productos.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    productos.hasMany(models.VARIANTE, { foreignKey: 'id_producto'});
    productos.belongsTo(models.CATEGORIA, {foreignKey: 'id_categoria'});
    productos.belongsTo(models.PRODUCTOR, {foreignKey: 'id_productor'});
    productos.belongsToMany(models.CARACTERISTICA, {through: 'PRODUCTO_CARACTERISTICA', foreignKey: 'id_producto'});
  };

  return productos;
};
