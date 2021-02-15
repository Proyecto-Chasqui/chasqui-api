// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const tags = sequelizeClient.define('TAG', {
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.STRING, allowNull: false },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  tags.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    tags.hasOne(models.VENDEDOR_TAG_TIPO_ORGANIZACION, { foreignKey: 'id_tag_tipo_organizacion' });
    tags.hasOne(models.VENDEDOR_TAG_ZONA_COBERTURA, { foreignKey: 'id_tag_zona_cobertura' });
    tags.hasOne(models.VENDEDOR_TAG_TIPO_PRODUCTO, { foreignKey: 'id_tag_tipo_producto' });
  };

  return tags;
};
