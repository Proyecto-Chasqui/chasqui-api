// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vendedorTagProducto = sequelizeClient.define('VENDEDOR_TAG_TIPO_PRODUCTO', {
    id_vendedor: { type: DataTypes.INTEGER, allowNull: false },
    id_tag_tipo_producto: { type: DataTypes.INTEGER, allowNull: false },
    sequence: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  vendedorTagProducto.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    vendedorTagProducto.belongsTo(models.VENDEDOR, { foreignKey: 'id_vendedor' });
    vendedorTagProducto.belongsTo(models.TAG, { foreignKey: 'id_tag_tipo_producto' });
  };

  return vendedorTagProducto;
};
