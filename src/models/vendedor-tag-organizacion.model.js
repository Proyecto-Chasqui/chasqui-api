// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vendedorTagOrganizacion = sequelizeClient.define('VENDEDOR_TAG_TIPO_ORGANIZACION', {
    id_vendedor: { type: DataTypes.INTEGER, allowNull: false },
    id_tag_tipo_organizacion: { type: DataTypes.INTEGER, allowNull: false },
    sequence: { type: DataTypes.INTEGER, allowNull: false, primaryKey: true },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  vendedorTagOrganizacion.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    vendedorTagOrganizacion.belongsTo(models.VENDEDOR, { foreignKey: 'id_vendedor' });
    vendedorTagOrganizacion.belongsTo(models.TAG, { foreignKey: 'id_tag_tipo_organizacion' });
  };

  return vendedorTagOrganizacion;
};
