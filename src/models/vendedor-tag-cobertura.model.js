// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vendedorTagCobertura = sequelizeClient.define('VENDEDOR_TAG_ZONA_COBERTURA', {
    id_vendedor: { type: DataTypes.INTEGER, allowNull: false},
    id_tag_zona_cobertura: { type: DataTypes.INTEGER, allowNull: false  },
    sequence: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  vendedorTagCobertura.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    vendedorTagCobertura.belongsTo(models.VENDEDOR, { foreignKey: 'id_vendedor' });
    vendedorTagCobertura.belongsTo(models.TAG, { foreignKey: 'id_tag_zona_cobertura' });
  };

  return vendedorTagCobertura;
};
