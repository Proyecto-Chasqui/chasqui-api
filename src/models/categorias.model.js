// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const categorias = sequelizeClient.define('CATEGORIA', {
    nombre: { type: DataTypes.STRING, allowNull: false },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  categorias.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    categorias.hasMany(models.PRODUCTO,{ foreignKey: 'id_categoria'});
    categorias.belongsTo(models.VENDEDOR, {foreignKey: 'id_vendedor'});
  };

  return categorias;
};
